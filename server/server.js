import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware para verificar JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Ruta para obtener todos los productos
app.get("/api/products", authenticateJWT, (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching products" });
    }
    res.json(results);
  });
});

// Ruta para obtener un usuario por ID (ejemplo)
app.get("/api/users/:id", authenticateJWT, (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching user" });
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
