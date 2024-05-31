/* eslint-disable no-unused-vars */

import sharp from "sharp";

// process Image middleware
const processImage = async (req, res, next) => {
  const filePath = req.file.path;

  const processedImagePath = `${filePath}-processed.png`;
  // Load image metadata to determine the appropriate preprocessing steps
  const { width, height, format, orientation } =
    await sharp(filePath).metadata();

  // Initialize the image processing pipeline
  let image = sharp(filePath).grayscale(); // Convert to grayscale

  // Handle image rotation based on orientation metadata
  if (orientation && orientation !== 1) {
    image = image.rotate();
  }

  // Resize the image based on its width
  if (width > 1000) {
    image = image.resize({ width: 1000 });
  } else if (width < 500) {
    image = image.resize({ width: 800 });
  }

  // Sharpen the image
  image = image.sharpen();

  // Apply noise reduction based on image type
  if (format === "jpeg" || format === "jpg") {
    image = image.median(3); // Apply median filter to reduce noise
  } else if (format === "png") {
    image = image.median(1); // Apply lighter noise reduction for PNGs
  } else if (format === "tiff") {
    image = image.median(5); // Apply stronger noise reduction for TIFFs
  }

  // Adjust brightness and contrast based on initial analysis
  const stats = await image.stats();
  const meanBrightness = stats.channels[0].mean;
  if (meanBrightness < 100) {
    image = image.modulate({ brightness: 1.5, contrast: 1.3 });
  } else if (meanBrightness > 150) {
    image = image.modulate({ brightness: 0.9, contrast: 1.1 });
  } else {
    image = image.modulate({ brightness: 1.2, contrast: 1.2 });
  }

  // Apply thresholding
  image = image.threshold(128); // Simple thresholding

  // Normalize the image to enhance contrast
  image = image.normalize();

  // Save the processed image
  await image.toFile(processedImagePath);

  req.procImage = processImage;
  next();

  
};

export default processImage;
