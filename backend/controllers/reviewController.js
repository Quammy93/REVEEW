const Reviews = require("../models/Reviews");
const BadRequestError = require("../errors/BadrequestError");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

const createReview = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  console.log(userId);

  const { feedback } = req.body;
  const title = feedback.title;
  const comment = feedback.comment;
  const value = feedback.value;
  // req.body.product_reviewed = id;
  // req.body.reviewer = userId;
  if (!title || !comment || !value) {
    throw new BadRequestError("Please Provide all the fields");
  }
  const review = await Reviews.create({
    title: title,
    comment: comment,
    value: value,
    product_reviewed: id,
    reviewer: userId,
  });
  res.status(StatusCodes.OK).json({ review });
};
const deleteReview = async (req, res) => {
  const { id } = req.params;
  const review = await Reviews.findOne({ _id: id });
  if (!review) {
    throw new NotFoundError(`No review with this ${id}`);
  }
  await review.remove();
  res.status(StatusCodes.OK).json("deleted successfully");
};
const updateReview = (req, res) => {
  res.status(200).json("creating review");
};
const getAllReviews = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const product_reviewed = id;
  const reviews = await Reviews.find({
    product_reviewed: product_reviewed,
  }).populate({ path: "reviewer", select: "name " });

  const numOfZeroReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 0,
  });
  const numOfOneReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 1,
  });
  const numOfTwoReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 2,
  });
  const numOfThreeReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 3,
  });
  const numOfFourReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 4,
  });
  const numOfFiveReview = await Reviews.countDocuments({
    product_reviewed: product_reviewed,
    value: 5,
  });

  res.status(StatusCodes.OK).json({
    reviews,
    numOfFiveReview,
    numOfFourReview,
    numOfThreeReview,
    numOfTwoReview,
    numOfOneReview,
    numOfZeroReview,
  });
};
const getSingleReview = async (req, res) => {
  const { id } = req.params;
  const review = await Reviews.findOne({ _id: id });
  res.status(StatusCodes.OK).json(review);
};

module.exports = {
  getAllReviews,
  getSingleReview,
  deleteReview,
  updateReview,
  createReview,
};
