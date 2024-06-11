import Tesseract from "tesseract.js";
import { ApiError } from "../utils/index.utils.js";

async function performOcr(imagePath) {
  if (!imagePath) throw new ApiError(402, "please send a image ");
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m),
    });
    return text;
  } catch (error) {
    console.error("Error performing OCR:", error);
    return null;
  }
}

export default performOcr;


