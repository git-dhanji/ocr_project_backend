//Custom error class to handle API errors, extending the built-in Error class.
class ApiError extends Error {
  constructor(
    statusCode = 404,
    message = "Something went wrong",
    stack,
    error = []
  ) {
    // Call the parent class (Error) constructor with the message
    super(message);
    // status code Http (300 - 500)
    this.statusCode = statusCode;

    // Handle stack trace: use provided stack trace or capture a new one (proper error place and exact loction and any why  and what error )
    this.stack = stack;
    this.error = error;
    this.success = false;
    this.data = null;

    //stack -------->
    if (stack) {
      this.stack = stack;
    } else {
      // capture a new stack trace excluding the constructor call from the trace
      Error.captureStackTrace(this, this.constructor);
    }
  }

  //  ----static method for bad request ----
  static badRequest(message = "Bad Request", error = []) {
    return new ApiError(400, message, null, error);
  }

  //
  // --- static method for unauthorized ----
  static unAuthorized(message = "un Authorized ", error = []) {
    return new ApiError(401, message, null, error);
  }

  // --- static method for notFound ----
  static notFound(message = "Resource not found", errors = []) {
    return new ApiError(404, message, null, errors);
  }
}

export default ApiError;
