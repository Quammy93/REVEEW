const mongoose = require("mongoose");
const { format } = require("date-fns");
const { enUS } = require("date-fns/locale");

const ReviewsSchema = new mongoose.Schema(
  {
    formattedTimestamp: String,
    review_date: { type: Date, default: Date.now() },
    title: { type: String },
    type: { type: String },
    comment: { type: String },
    value: { type: Number, default: 0 },

    item_reviewed: { type: mongoose.Types.ObjectId, ref: "Item" },
    reviewer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    experienceDate: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
//preventing a review by user on a product

ReviewsSchema.index({ item_reviewed: 1, reviewer: 1 }, { unique: true });

ReviewsSchema.pre("save", function () {
  // Format the timestamp before saving
  this.formattedTimestamp = format(this.review_date, "d MMMM yyyy", {
    locale: enUS,
  });
});

// calculating average reviews rates
ReviewsSchema.statics.computeAvgRating = async function (itemId) {
  const result = await this.aggregate([
    { $match: { item_reviewed: itemId } },
    {
      $group: {
        _id: null,
        avgrating: { $avg: "$value" },
        numOfReview: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model("Item").findOneAndUpdate(
      { _id: itemId },
      {
        avgrating: Math.ceil(result[0]?.avgrating || 0),
        numOfReview: result[0]?.numOfReview || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

ReviewsSchema.post("save", async function () {
  await this.constructor.computeAvgRating(this.item_reviewed);
});
ReviewsSchema.post("remove", async function () {
  await this.constructor.computeAvgRating(this.item_reviewed);
});

module.exports = mongoose.model("Reviews", ReviewsSchema);
