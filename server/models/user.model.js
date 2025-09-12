import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:["instructor","student"],
        default: "student"
    },
    enrolledCourses:[            //you can enrolled in multiple courses so in array
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    photoUrl:{
        type:String,
        default:""
    }

},{timestamps:true});

export const User= mongoose.model("User", userSchema);