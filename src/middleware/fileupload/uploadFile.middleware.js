import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp"); // store image loction /public/temp(destination)
  },

  filename: (req, file, cb) => {
    /**
     *
     * for @custom file name  code -->
     * const @uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     * cb(null, file.fieldname + '-' + uniqueSuffix)
     *
     */

    cb(null, file.originalname); //store with original filename
  },
});

export const uploadFile = multer({ storage: storage });
