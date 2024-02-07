//download course by id
import mongoose from "mongoose";
import Course from "../models/Course.js";
import path from "path";
// import { fileURLToPath } from 'url';
// import dirname from 'path';

const downloadCourseFile = (req, res) => {
    
    const courseId = req.params.id;

    Course.findById(courseId)
        .then(course => {
            if (!course) {
                res.status(404).send("Course not found");
                return;
            }

            // Replace backslashes with forward slashes in the file path
            const filePath = path.join(__dirname, '..', course.courseFile.replace(/\\/g, '/'));

            // Serve the file as a download
            res.download(filePath, course.courseFile.split('\\').pop(), (err) => {
                if (err) {
                    console.error("Error downloading file:", err);
                    res.status(500).send("Error downloading file");
                }
            });
        })
        .catch(err => {
            console.error("Error finding course:", err);
            res.status(500).send("Error finding course");
        });
};
export { downloadCourseFile };