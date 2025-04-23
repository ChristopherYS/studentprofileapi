const { db } = require('../utils/db');

// Function to get grades by student ID
const getGradesByStudentId = (studentId, callback) => {
  db.all('SELECT s.subject_name, sg.subject_grades FROM student_subject_grades sg JOIN subject s ON sg.subject_id = s.id WHERE sg.student_id = ?',
    [studentId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

// Function to update a grade
const updateGrade = (id, subject_grades, callback) => {
  db.run('UPDATE student_subject_grades SET subject_grades = ? WHERE id = ?',
    [subject_grades, id], function(err) {
    if (err) return callback(err);
    callback(null);
  });
};

module.exports = { getGradesByStudentId, updateGrade };