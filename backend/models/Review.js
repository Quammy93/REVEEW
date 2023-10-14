const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  like: { type: Number },
  dislike: { type: Number },
  review_date: { type: Date },
  review: { type: String },
  rating: { type: Number },
  reviewer: { type: mongoose.Types.ObjectId, ref: "User" },
  product_reviewed: { type: mongoose.Types.ObjectId, ref: "Product" },
  product: { type: String },
});

module.exports = mongoose.model("Review", ReviewSchema);
