import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./database/db.js";

import userRoute from "./routes/user.route.js";
import "./models/course.model.js"; 
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import { stripeWebhook } from "./controllers/coursePurchase.controller.js";
import courseProgressRoute from "./routes/courseProgress.route.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Stripe webhook route must use raw body parser
app.post("/webhook", bodyParser.raw({ type: "application/json" }), stripeWebhook);

// Default middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// API routes
app.use("/api/v1/media", mediaRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/purchase', purchaseRoute);
app.use('/api/v1/progress', courseProgressRoute);

app.get('/home', (_, res) => {
    res.status(200).json({
        success: true,
        message: "Hello I am from backend"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
