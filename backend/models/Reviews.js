const mongoose = require("mongoose");
const { format } = require("date-fns");
const { enUS } = require("date-fns/locale");



const ReviewsSchema = new mongoose.Schema(
  {
    formattedTimestamp: String,
    review_date: { type: Date, default: Date.now() },
    title: { type: String },
    comment: { type: String },
    value: { type: Number, default: 0 },
    reviewer: { type: mongoose.Types.ObjectId, ref: "User" },
    product_reviewed: { type: mongoose.Types.ObjectId, ref: "Product" },
  },
  { timestamps: true }
);

ReviewsSchema.pre("save", function (next) {
  // Format the timestamp before saving
  this.formattedTimestamp = format(this.review_date, "d MMMM yyyy", {
    locale: enUS,
  });
  next();
});



module.exports = mongoose.model("Review", ReviewsSchema);

//ReviewSchema.index({ product_reviewed: 1, reviewer: 1 }, { unique: true });
