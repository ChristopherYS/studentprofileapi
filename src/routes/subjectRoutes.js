import express from 'express';
const router = express.Router();
import * as subjectController from '../controllers/subjectController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.use(authMiddleware);

router.post('/', subjectController.createSubject);
router.get('/', subjectController.getAllSubjects);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);
router.post('/grades', subjectController.addStudentGrades);
router.put('/grades/:id', subjectController.updateStudentGrades);
router.delete('/grades/:id', subjectController.deleteStudentGrades);

export default router;