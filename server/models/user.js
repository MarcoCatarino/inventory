const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  findByUsername: (username, callback) => {
    db.query("SELECT * FROM users WHERE username = ?", [username], callback);
  },

  create: (userData, callback) => {
    bcrypt.hash(userData.password, 10, (err, hashedPassword) => {
      if (err) throw err;

      const query =
        "INSERT INTO users (numColab, username, password, rol, created_at) VALUES (?, ?, ?, ?, ?)";
      const values = [
        userData.numColab,
        userData.username,
        hashedPassword,
        userData.rol,
        new Date(),
      ];

      db.query(query, values, callback);
    });
  },
};

module.exports = User;
