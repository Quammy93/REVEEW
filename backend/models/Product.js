const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: { type: String },
  img: { type: String },
  product_imgs: { type: [String] },
  product_category: { type: String, enum: ["admin", "user"] },
  price: { type: Number },
  product_subCategory: { type: String },
  product_brand: { type: String },
  product_desc: { type: String },
  product_features: { type: [String] },
  specification: { type: [String] },
});

module.exports = mongoose.model("Product", ProductSchema);
