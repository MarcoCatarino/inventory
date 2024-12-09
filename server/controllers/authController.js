const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const register = (req, res) => {
  const { numColab, username, password, rol } = req.body;

  User.findByUsername(username, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const newUser = { numColab, username, password, rol };
    User.create(newUser, (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error al registrar el usuario" });
      res.status(201).json({ message: "Usuario registrado con éxito" });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, results) => {
    if (results.length === 0) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign(
        { userId: results[0].id, rol: results[0].rol },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Autenticación exitosa", token });
    });
  });
};

module.exports = { register, login };
