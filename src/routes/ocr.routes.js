import { Router } from "express";
import { ocrRunning } from "../controllers/ocr.controllers.mjs";
import { uploadFile } from "../middleware/fileupload/uploadFile.middleware.js";


const route =Router();

route.route('/ocr').post(uploadFile.single('image'),ocrRunning)


export default route;