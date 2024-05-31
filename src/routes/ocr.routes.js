import { Router } from "express";
import performOCR from "../controllers/ocr.contoller.js";
import { uploadFile } from "../middleware/fileupload/uploadFile.middleware.js";

const router = Router();

router.route("/ocr").post(uploadFile.single("image"),performOCR);

export default router;
