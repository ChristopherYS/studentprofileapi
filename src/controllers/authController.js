import { db } from '../utils/db.js';
import { comparePassword } from '../utils/bcryptUtil.js';

// Registrar login   
export async function registrarLogin(req, res) {
  const { username, password } = req.body;
    db.get('SELECT * FROM registrar WHERE username = ?', [username], async (err, row) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    if (!row) return res.status(404).json({ message: 'Registrar not found' });

    const isMatch = await comparePassword(password, row.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', user: row });
  });
};

// Student Log in 
export async function studentLogin(req, res) {
  const { username, password } = req.body;
  db.get('SELECT * FROM student WHERE username = ?', [username], async (err, row) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    if (!row) return res.status(404).json({ message: 'Student not found' });

    const isMatch = await comparePassword(password, row.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', user: row });
  });
};