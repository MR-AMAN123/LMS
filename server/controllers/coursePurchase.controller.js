import Stripe from "stripe";
import jwt from "jsonwebtoken";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutsession = async (req, res) => {
  try {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    const { courseId } = req.body;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    const newPurchase = new CoursePurchase({
      courseId,
      userId,
      amount: course.coursePrice,
      status: "pending",
    });

const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  line_items: [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: course.courseTitle,
          images: [course.courseThumbnail],
        },
        unit_amount: course.coursePrice * 100,
      },
      quantity: 1,
    },
  ],
  mode: "payment",
  success_url: `https://lms-rho-azure.vercel.app/course-progress/${courseId}`,
  cancel_url: `https://lms-rho-azure.vercel.app/course-detail/${courseId}`,
  metadata: { courseId, userId },
  shipping_address_collection: { allowed_countries: ["IN"] },
});

    newPurchase.paymentId = session.id;
    await newPurchase.save();

    return res.status(200).json({ success: true, url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const stripeWebhook = async (req, res) => {
  let event;
  const signature = req.headers["stripe-signature"];

  try {
    event = stripe.webhooks.constructEvent(
      req.body, // raw body required
      signature,
      process.env.WEBHOOK_ENDPOINT_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const purchase = await CoursePurchase.findOne({ paymentId: session.id }).populate("courseId");
    if (!purchase) return res.status(404).json({ message: "Purchase not found" });

    purchase.status = "completed";
    if (session.amount_total) purchase.amount = session.amount_total / 100;

    // Make all lectures visible
    if (purchase.courseId?.lectures?.length) {
      await Lecture.updateMany(
        { _id: { $in: purchase.courseId.lectures } },
        { $set: { isPreviewFree: true } }
      );
    }

    await purchase.save();

    // Update user's enrolledCourses
    await User.findByIdAndUpdate(purchase.userId, {
      $addToSet: { enrolledCourses: purchase.courseId._id },
    });

    // Update course's enrolledStudents
    await Course.findByIdAndUpdate(purchase.courseId._id, {
      $addToSet: { enrolledStudents: purchase.userId },
    });

    console.log(`Purchase completed for user ${purchase.userId}, course ${purchase.courseId._id}`);
  }

  res.status(200).json({ received: true });
};

export const getCourseDetailWithPurchaseStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const course = await Course.findById(courseId)
      .populate({ path: "creator" })
      .populate({ path: "lectures" });

    const purchased = await CoursePurchase.findOne({ userId, courseId, status:"completed" });
    console.log(purchased);

    if (!course) {
      return res.status(404).json({ message: "course not found!" });
    }

    return res.status(200).json({
      course,
      purchased: !!purchased, // true if purchased, false otherwise
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPurchasedCourse = async (_, res) => {
  try {
    const purchasedCourse = await CoursePurchase.find({
      status: "completed",
    }).populate("courseId");
    if (!purchasedCourse) {
      return res.status(404).json({
        purchasedCourse: [],
      });
    }
    return res.status(200).json({
      purchasedCourse,
    });
  } catch (error) {
    console.log(error);
  }
};