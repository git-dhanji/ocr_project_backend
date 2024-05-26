class ApiResponse {
  constructor(
    statusCode,
    message = "Response is Running successfully",
    data = null
  ) {
    // checks  statusCode type 
    if (
      typeof statusCode !== "number" ||
      statusCode < 100 ||
      statusCode >= 600 ||
      !Number.isInteger(statusCode)
    ) {
      throw new Error(
        "Invalid status code. Status code must be an integer between 100 and 599."
      );
    }

    //check message type
    if (typeof message !== "string") {
      throw new Error("Message must be a string.");
    }

    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
