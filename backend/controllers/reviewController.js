const Reviews = require("../models/Reviews");
const BadRequestError = require("../errors/BadrequestError");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

//creating review
const createReview = async (req, res) => {


  console.log(req.body);
  const { id } = req.params;
  const { userId } = req.user;
  console.log("user", userId);

  const { feedback } = req.body;
  const title = feedback.title;
  const comment = feedback.comment;
  const value = feedback.value;

  req.body.item_reviewed = id;
  req.body.reviewer = userId;
  if (!title || !comment || !value) {
    throw new BadRequestError("Please Provide all the fields");
  }
  const review = await Reviews.create({
    title: title,
    comment: comment,
    value: value,
    item_reviewed: id,
    reviewer: userId,
  });
  res.status(StatusCodes.OK).json({ review });
};

//deleting review
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
  const item_reviewed = id;

  const { filter, sort } = req.query;

  //for handling request query in the front end
  const requestQuerry={}
  requestQuerry.filter=filter
  requestQuerry.sort=sort

  const queryObj = { item_reviewed: item_reviewed };

  if (filter) {
    const filtered = filter.split(",");
    queryObj.value = filtered;
  }
  
 
  let result = Reviews.find(queryObj).populate({
    path: "reviewer",
    select: "name ",
  });

  //sorting
  if (sort === "most-recent") {
    result = result.sort("createdAt");
  }
//  if (sort === "most-liked") {
//    result = result.sort("likes");
 // }

  const numOfZeroReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 0,
  });
  const numOfOneReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 1,
  });
  const numOfTwoReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 2,
  });
  const numOfThreeReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 3,
  });
  const numOfFourReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 4,
  });
  const numOfFiveReview = await Reviews.countDocuments({
    item_reviewed: item_reviewed,
    value: 5,
  });






 const page = Number(req.query.page) || 1;
 const limit = Number(req.query.limit) || 10;
 const skip = (page - 1) * limit;
 const endIndex = page * limit;

 result = result.skip(skip).limit(limit);

 const totalCount = await Reviews.countDocuments(queryObj);
 const numOfPages = Math.ceil(totalCount / limit);

 //setting content-range header
 const startRange = skip + 1;
 const endRange = endIndex < totalCount ? endIndex : totalCount;

 res.set("X-Total-Count", totalCount);
 res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

 const reviews = await result;

 res
   .status(StatusCodes.OK)
   .json({
     reviews,
     totalCount,
     numOfPages,
     numOfFiveReview,
     numOfFourReview,
     numOfThreeReview,
     numOfTwoReview,
     numOfOneReview,
     numOfZeroReview,
     requestQuerry
   });
};

//getting a single review
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
