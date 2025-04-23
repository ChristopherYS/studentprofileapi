import { db } from '../utils/db.js';
import { hashPassword } from '../utils/bcryptUtil.js';

// Create a new student
export const createStudent = async (req, res) => {
  const { school_id, name, address, email_address, username, password } = req.body;
  const hashedPassword = await hashPassword(password);

  db.run('INSERT INTO student (school_id, name, address, email_address, username, password) VALUES (?, ?, ?, ?, ?, ?)',
    [school_id, name, address, email_address, username, hashedPassword], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.status(201).json({ message: 'Student created', id: this.lastID });
  });
};

// Get all students
export const getAllStudents = (req, res) => {
  db.all('SELECT * FROM student', (err, rows) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json(rows);
  });
};

// Create a new registrar
export const createRegistrar = async (req, res) => {
  const { school_id, name, address, email_address, position, username, password } = req.body;
  const hashedPassword = await hashPassword(password);

  db.run('INSERT INTO registrar (school_id, name, address, email_address, position, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [school_id, name, address, email_address, position, username, hashedPassword], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.status(201).json({ message: 'Registrar created', id: this.lastID });
  });
};

// Update student information
export const updateStudent = (req, res) => {
  const { id } = req.params;
  const { school_id, name, address, email_address, username, password } = req.body;

 db.run('UPDATE student SET school_id = ?, name = ?, address = ?, email_address = ?, username = ?, password = ? WHERE id = ?',
    [school_id, name, address, email_address, username, password, id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Student updated' });
  });
};

// Delete a student
export const deleteStudent = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM student WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    res.json({ message: 'Student deleted' });
  });
};