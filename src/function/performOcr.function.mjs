import Tesseract from "tesseract.js";

async function performOcr(imagePath) {
  const {
    data: { text },
  } = Tesseract.recognize(imagePath, "eng");
  return text;
}

export default performOcr;
