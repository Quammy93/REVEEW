const CustomError = require("../errors/CustomError");
const { StatusCodes } = require("http-status-codes");

class BadrequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadrequestError;
