import express from 'express';
const router = express.Router();
import { getStudentProfile, updateStudentProfile, getStudentGrades } from '../controllers/studentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.use(authMiddleware);

router.get('/profile/:id', getStudentProfile);
router.put('/profile/:id', updateStudentProfile);
router.get('/grades/:id', getStudentGrades);

export default router;