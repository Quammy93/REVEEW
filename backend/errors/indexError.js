const BadrequestError = require("../errors/BadrequestError");
const CustomError = require("../errors/CustomError");
const UnAunthenticatedError = require("../errors/UnAunthenticatedError");
const UnauthorizedError = require("./UnauthorizedError");

modules.exports = {
  CustomError,
  BadrequestError,
  UnAunthenticatedError,
  UnauthorizedError,
};
