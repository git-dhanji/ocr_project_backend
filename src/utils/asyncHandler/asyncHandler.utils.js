// async handler code pass your async function inside it

// try catch mode ---
const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      // return the passed function || method as asynchronous mode
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message || "error while asyncHandler",
      });
    }
  };
};




export default asyncHandler;
