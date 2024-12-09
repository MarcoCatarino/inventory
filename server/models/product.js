const db = require("../config/db");

const Product = {
  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  create: (productData, callback) => {
    const query =
      "INSERT INTO products (brand, model, type, description, state, hotel, department, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      productData.brand,
      productData.model,
      productData.type,
      productData.description,
      productData.state,
      productData.hotel,
      productData.department,
      new Date(),
      new Date(),
    ];

    db.query(query, values, callback);
  },
};

module.exports = Product;
