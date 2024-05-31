import Tesseract from "tesseract.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.utils.js";

const performOCR = asyncHandler(async (req, res) => {
    
  const filepath = req.procImage || req.file.path;

  if (!filepath) {
    throw new ApiError(402, "image file path is not available in ocr ");
  }



  try {
    const {
      data: { text },
    } = await Tesseract.recognize(
      filepath,
      "eng", // Language for OCR
      {
        logger: (m) => console.log(m),
      }
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "ocr success fully completed ", text));
  } catch (error) {
    console.log(error);
    throw new ApiError(401, "error while perform ocr");
  }
});

export default performOCR;
