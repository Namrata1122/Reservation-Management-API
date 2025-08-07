const CustomAPIError = require('./customError');
const {statusCodes} = require('http-status-codes');
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = statusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;