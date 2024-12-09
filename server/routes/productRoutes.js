const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');
const authenticateJWT = require('../middleware/authMiddleware');

// Rutas protegidas por JWT
router.get('/', authenticateJWT, getAllProducts);
router.post('/', authenticateJWT, createProduct);

module.exports = router;
