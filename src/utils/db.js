import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Initialize the database with tables
const initDb = async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS registrar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      school_id TEXT,
      name TEXT,
      address TEXT,
      email_address TEXT,
      position TEXT,
      username TEXT UNIQUE,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS student (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      school_id TEXT,
      name TEXT,
      address TEXT,
      email_address TEXT,
      username TEXT UNIQUE,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS subject (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject_code TEXT,
      subject_name TEXT,
      subject_units INTEGER,
      subject_course TEXT,
      subject_studentyear INTEGER,
      subject_studentsemester INTEGER
    );

    CREATE TABLE IF NOT EXISTS student_grades (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER,
      subject_id INTEGER,
      subject_grades DOUBLE,
      FOREIGN KEY (student_id) REFERENCES student(id),
      FOREIGN KEY (subject_id) REFERENCES subject(id)
    );
  `);
};

const db = await open({
    filename: './student_profile_api.db',
    driver: sqlite3.Database
  });

await initDb(db);

export { db };
