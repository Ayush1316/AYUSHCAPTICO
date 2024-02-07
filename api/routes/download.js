import express from 'express';
import { downloadCourseFile } from '../controllers/download.controller.js';
const router = express.Router();
router.get('/:id/download', downloadCourseFile);
export default router;
