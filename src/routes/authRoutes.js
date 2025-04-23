import express from 'express';
const router = express.Router();
import * as authController from '../controllers/authController.js';

router.post('/registrar/login', authController.registrarLogin);
router.post('/student/login', authController.studentLogin);

export default router;