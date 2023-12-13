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
//preventing a review by user on a product
ReviewsSchema.index({ product_reviewed: 1, reviewer: 1 }, { unique: true });

ReviewsSchema.pre("save", function () {
  // Format the timestamp before saving
  this.formattedTimestamp = format(this.review_date, "d MMMM yyyy", {
    locale: enUS,
  });
});

// calculating average reviews rates
ReviewsSchema.statics.computeAvgRating = async function (productId) {
  const result = await this.aggregate([
    { $match: { product_reviewed: productId } },
    {
      $group: {
        _id: null,
        product_Avgrating: { $avg: "$value" },
        numOfReview: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model("Product").findOneAndUpdate(
      { _id: productId },
      {
        product_Avgrating: Math.ceil(result[0]?.product_Avgrating || 0),
        numOfReview: result[0]?.numOfReview || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

ReviewsSchema.post("save", async function () {
  await this.constructor.computeAvgRating(this.product_reviewed);
});
ReviewsSchema.post("remove", async function () {
  await this.constructor.computeAvgRating(this.product_reviewed);
});

module.exports = mongoose.model("Reviews", ReviewsSchema);


