const Product = require("../models/product");

const getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err)
      return res.status(500).json({ message: "Error al obtener productos" });
    res.status(200).json(results);
  });
};

const createProduct = (req, res) => {
  const { brand, model, type, description, state, hotel, department } =
    req.body;

  const newProduct = {
    brand,
    model,
    type,
    description,
    state,
    hotel,
    department,
  };
  Product.create(newProduct, (err, result) => {
    if (err)
      return res.status(500).json({ message: "Error al crear producto" });
    res.status(201).json({ message: "Producto creado con éxito" });
  });
};

module.exports = { getAllProducts, createProduct };
