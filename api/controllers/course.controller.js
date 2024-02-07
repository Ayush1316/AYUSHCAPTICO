import mongoose from "mongoose";
import Course from "../models/Course.js";
import { fileUploadMiddleware } from '../fileUpload.js';
const createCourse = async (req, res, next) => {
    try {
        // Placeholder for file upload logic
        if (!req.file) {
            throw new Error("No file provided");
        }

        const newCourse = new Course({
            courseName: req.body.courseName,
            courseDetail: req.body.courseDetail,
            courseImage: req.body.courseImage || "https://th.bing.com/th/id/OIP.5Wm02Pe_N3xY0xbl1bOnjQHaFj?rs=1&pid=ImgDetMain",
            coursePrice: req.body.coursePrice,
            courseFile: req.file.path, // Use req.file.path from fileUploadMiddleware
        });

        const savedCourse = await newCourse.save();
        console.log("Course created:", savedCourse);

        res.status(201).json({ message: "Course created successfully" });
    } catch (error) {
        console.error("Error creating course:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        // Close the Mongoose connection
        mongoose.disconnect();
    }
};


// Placeholder for file upload logic
const uploadFile = async (file) => {
    try {
        if (!file) {
            throw new Error("No file provided");
        }

        // Perform additional logic if needed (e.g., store the file in a local directory)
        const filePath = `/uploads/${file.filename}`; // Assuming file is stored in a local 'uploads' directory

        return { filePath };
    } catch (error) {
        console.error("Error uploading file:", error.message);
        throw error;
    }
};

//update course
const updateCourse = async (req, res) => {
    try {
      // File upload middleware is integrated here for handling file uploads
  
      // Extract course details and file path from request
      const { courseName, courseDetail, coursePrice } = req.body;
      const courseFile = req.file ? req.file.path : undefined; // If file is uploaded, use its path
  
      // Construct updated fields object
      const updatedFields = {};
      if (courseName) updatedFields.courseName = courseName;
      if (courseDetail) updatedFields.courseDetail = courseDetail;
      if (coursePrice) updatedFields.coursePrice = coursePrice;
      if (courseFile) updatedFields.courseFile = courseFile;
  
      // Update the course based on ID
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
  
      // Check if the course exists
      if (!updatedCourse) {
        return res.status(404).json({ error: "Course not found" });
      }
  
      // Send success response with updated course data
      res.status(200).json({ message: "Course updated successfully", updatedCourse });
    } catch (error) {
      console.error("Error updating course:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  


//get all courses
const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error getting courses:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//delete course by id
const deleteCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.id;

        // Validate if courseId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ error: "Invalid courseId" });
        }

        const deletedCourse = await Course.findByIdAndDelete(courseId);

        if (!deletedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json({ message: "Course deleted successfully", deletedCourse });
    } catch (error) {
        console.error("Error deleting course:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};






const updateCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.id;
        const existingCourse = await Course.findById({_id:courseId});
        co
        if (!existingCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        console.log("Existing Course:", existingCourse);

        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            {
                $set: {
                    courseName: req.body.courseName,
                    courseDetail: req.body.courseDetail,
                    courseImage: req.body.courseImage || "https://th.bing.com/th/id/OIP.5Wm02Pe_N3xY0xbl1bOnjQHaFj?rs=1&pid=ImgDetMain",
                    coursePrice: req.body.coursePrice,
                    courseFile: req.body.courseFile,
                },
            },
            { new: true } // Return the updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json({ message: "Course updated successfully", updatedCourse });
    } catch (error) {
        console.error("Error updating course:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// export { getAllCourses };
export { createCourse,updateCourse,getAllCourses,deleteCourseById,updateCourseById };
