const Feed = require("../models/Feed");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

const createFeed = async (req, res) => {
  console.log(req.body);
  const { userId } = req.user;
  req.body.poster = userId;
  await Feed.create(req.body);

  res.status(StatusCodes.OK).json("feed created successfully");
};

const getSingleFeed = async (req, res) => {
  const { id } = req.params;
  const feed = await Feed.findOne({ _id: id });
  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  res.status(StatusCodes.OK).json({ feed });
};

const getAllFeeds = async (req, res) => {
  const feeds = await Feed.find({});
  res.status(StatusCodes.OK).json({ feeds });
};
const updateFeed = async (req, res) => {
  const { id } = req.params;
  const { like, dislike } = req.body;

  const feed = await Feed.findOne({ _id: id });
  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  feed.like = like;
  feed.dislike = dislike;
  await feed.save();

  res.status(StatusCodes.OK).json({ feed });
};
const deleteFeed = async (req, res) => {
  const { id } = req.params;
  const feed = await Feed.findByIdAndDelete({ _id: id });

  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  res.status(StatusCodes.OK).json("Feed deleted successfully");
};

module.exports = {
  getAllFeeds,
  getSingleFeed,
  updateFeed,
  createFeed,
  deleteFeed,
};
