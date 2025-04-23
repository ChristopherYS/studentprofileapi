const { db } = require('../utils/db');

// Function to get a student by ID
const getStudentById = (id, callback) => {
  db.get('SELECT * FROM student WHERE id = ?', [id], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
};

// Function to update student information
const updateStudent = (id, updates, callback) => {
  const { school_id, name, address, email_address, username, password } = updates;
  db.run('UPDATE student SET school_id = ?, name = ?, address = ?, email_address = ?, username = ?, password = ? WHERE id = ?',
    [school_id, name, address, email_address, username, password, id], function(err) {
    if (err) return callback(err);
    callback(null);
  });
};

module.exports = { getStudentById, updateStudent };