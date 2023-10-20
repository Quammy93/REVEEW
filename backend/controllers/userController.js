const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const BadrequestError = require("../errors/BadrequestError");
const NotFoundError = require("../errors/NotFoundError");
const UnAunthenticatedError = require("../errors/UnAunthenticatedError");

const { createTokenUser, attachCookiesToResponse } = require("../JWT");
const checkPermisions = require("../JWT/checkPermision");

//showing current user
const showCurrentUser = (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
//getting all the users
const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};
//getting single user
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id }).select("-password");
  if (!user) {
    throw new NotFoundError("user not found ");
  }
  checkPermisions(req.user, user._id);
  res.status(StatusCodes.OK).json(user);
};

//updating user
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const id = req.user.userId;
  if (!email || !name) {
    throw new BadrequestError("Please enter name and email");
  }
  const user = await User.findOne({ _id: id });
  user.email = email;
  user.name = name;

  await user.save();
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    throw new NotFoundError(`No product with id : ${id}`);
  }
  // console.log(user);
  // await user.remove();
  res.status(StatusCodes.OK).json({ msg: "user removed successfully" });
};

module.exports = {
  showCurrentUser,
  getAllUsers,
  getSingleUser,
  updateUser,

  deleteUser,
};
