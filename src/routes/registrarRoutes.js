import express from 'express';
const router = express.Router();
import { createStudent, getAllStudents, updateStudent, deleteStudent, createRegistrar } from '../controllers/registrarController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.use(authMiddleware);

router.post('/student', createStudent);
router.post('/registrar', createRegistrar);
router.get('/student', getAllStudents);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);
export default router;