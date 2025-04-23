import { db } from '../utils/db.js';

// Create a new subject
export const createSubject = (req, res) => {
  const { subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester } = req.body;

  db.run(
    'INSERT INTO subject (subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester) VALUES (?, ?, ?, ?, ?, ?)',
    [subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.status(201).json({ message: 'Subject created', id: this.lastID });
  });
};

// Get all subjects
export const getAllSubjects = (req, res) => {
  db.all('SELECT * FROM subject', (err, rows) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json(rows);
  });
};

// Update subject
export const updateSubject = (req, res) => {
  const { id } = req.params;
  const { subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester } = req.body;
  db.run(
    'UPDATE subject SET subject_code = ?, subject_name = ?, subject_units = ?, subject_course = ?, subject_studentyear = ?, subject_studentsemester = ? WHERE id = ?',
    [subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester, id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Subject updated' });
  });
};

// Delete a subject
export const deleteSubject = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM subject WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Subject deleted' });
  });
};

// Add student subject grades
export const addStudentGrades = (req, res) => {
  const { student_id, subject_id, subject_grades } = req.body;

  db.run('INSERT INTO student_subject_grades (student_id, subject_id, subject_grades) VALUES (?, ?, ?)',
    [student_id, subject_id, subject_grades], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.status(201).json({ message: 'Grade added', id: this.lastID });
  });
};

// Update student subject grades
export const updateStudentGrades = (req, res) => {
  const { id } = req.params;
  const { subject_grades } = req.body;

  db.run(
    'UPDATE student_subject_grades SET subject_grades = ? WHERE id = ?',
    [subject_grades, id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Grade updated' });
  });
};

// Delete student subject grades
export const deleteStudentGrades = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM student_subject_grades WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Grade deleted' });
  });
};