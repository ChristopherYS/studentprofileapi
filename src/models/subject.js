const { db } = require('../utils/db');

// Function to get a subject by ID
const getSubjectById = (id, callback) => {
  db.get('SELECT * FROM subject WHERE id = ?', [id], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
};

// Function to update subject information
const updateSubject = (id, updates, callback) => {
  const { subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester } = updates;
  db.run('UPDATE subject SET subject_code = ?, subject_name = ?, subject_units = ?, subject_course = ?, subject_studentyear = ?, subject_studentsemester = ? WHERE id = ?',
    [subject_code, subject_name, subject_units, subject_course, subject_studentyear, subject_studentsemester, id], function(err) {
    if (err) return callback(err);
    callback(null);
  });
};

module.exports = { getSubjectById, updateSubject };