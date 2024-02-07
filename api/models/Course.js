import mongoose, { Schema } from "mongoose";

const CourseSchema = mongoose.Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        courseDetail: {
            type: String,
            required: true,
        },
        courseImage: {
            type: String,
            required: false,
            default: "https://th.bing.com/th/id/OIP.5Wm02Pe_N3xY0xbl1bOnjQHaFj?rs=1&pid=ImgDetMain"
        },
        coursePrice: {
            type: Number,
            required: true,
        },
        courseFile: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
