const { db } = require('../utils/db');

// Function to get a registrar by ID
const getRegistrarById = (id, callback) => {
  db.get('SELECT * FROM registrar WHERE id = ?', [id], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
};

// Function to update registrar information
const updateRegistrar = (id, updates, callback) => {
  const { username, password } = updates;
  db.run('UPDATE registrar SET username = ?, password = ? WHERE id = ?',
    [username, password, id], function(err) {
    if (err) return callback(err);
    callback(null);
  });
};

module.exports = { getRegistrarById, updateRegistrar };