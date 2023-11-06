const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/BadrequestError");
const UnAunthenticatedError = require("../errors/UnAunthenticatedError");
const jwt = require("jsonwebtoken");
const {
  createTokenUser,
  attachCookiesToResponse,
  createJWTToken,
} = require("../JWT");
//const { TokenExpiredError } = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  //another way to check for the existence of the email
  const isEmailAlreadyExist = await User.findOne({ email });
  if (isEmailAlreadyExist) {
    throw new BadRequestError(
      "Email Already exist,Please use another mail address"
    );
  }
  // Signing /creating jwt token
  const user = await User.create({ name, email, password, role });
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnAunthenticatedError("Invalid credentials,user not found");
  }
  //comparing the user password
  const isPasswordCorrect = await user.comparePassword(password);
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new UnAunthenticatedError("Invalid Credentials");
  }
  //creating tokenUser
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

//loging out ,we reset the available actual token to dummy string logout

const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

module.exports = { register, login, logout };
