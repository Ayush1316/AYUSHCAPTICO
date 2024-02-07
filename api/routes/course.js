import express from 'express';
import { createCourse,getAllCourses,deleteCourseById,updateCourseById,updateCourse } from '../controllers/course.controller.js';
import { downloadCourseFile } from '../controllers/download.controller.js';
import { fileUploadMiddleware } from '../fileUpload.js';

const router = express.Router();

// Create Course
router.post("/createCourse",fileUploadMiddleware, createCourse);

//get course
router.get("/getAllCourses", getAllCourses);

//delete course by id
router.delete("/deleteCourse/:id", deleteCourseById);

//update course by id
router.put("/updateCourse/:id",fileUploadMiddleware, updateCourseById);

//update course
router.put('/ucourse/:id', fileUploadMiddleware, updateCourse);

//download course by id
export default router;
