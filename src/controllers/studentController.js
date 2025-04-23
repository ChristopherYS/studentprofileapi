import { db } from '../utils/db.js';
import { hashPassword } from '../utils/bcryptUtil.js';

// Get student profile
export const getStudentProfile = (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM student WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    if (!row) return res.status(404).json({ message: 'Student not found' });
    res.json(row);
  });
};

// Update student profile
export const updateStudentProfile = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);

  db.run('UPDATE student SET username = ?, password = ? WHERE id = ?',
    [username, hashedPassword, id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Profile updated' });
  });
};

// Get student grades
export const getStudentGrades = (req, res) => {
  const { id } = req.params;

  db.all('SELECT s.subject_name, sg.subject_grades FROM student_subject_grades sg JOIN subject s ON sg.subject_id = s.id WHERE sg.student_id = ?',
    [id], (err, rows) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json(rows);
  });
};