import performOcr from "../function/performOcr.function.mjs";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.utils.js";
import fs from "fs";

const ocrRunning = asyncHandler(async (req, res) => {
  let imagePath;

  if (req.file.mimetype === "application/pdf") {
    // write converstion method (function) pdf to jpeg or png etc
    console.log("working on this please send .png .jpeg .tiff type file ");
  } else {
    imagePath = req.file.path;
  }

  if (!imagePath) {
    throw new ApiError(400, "file path is not avialable for ocr ");
  }

  try {
    const text = await performOcr(imagePath);

    fs.unlink(imagePath, (e) => {
      if (e) {
        console.log(e);
      }
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "ocr completed successfully", text));
  } catch (error) {
    console.log(error);
    throw new ApiError(400, "ocr running error", error);
  }
});

export { ocrRunning };
