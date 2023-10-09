const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class UnAunthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAunthenticatedError;
