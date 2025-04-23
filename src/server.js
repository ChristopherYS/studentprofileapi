import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import registrarRoutes from './routes/registrarRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(corsMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/registrar', registrarRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/subject', subjectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});