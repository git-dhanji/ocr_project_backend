/* eslint-disable no-undef */
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//serve the static files
app.use(express.static("public"));

// cross origin : block the unwanted request
app.use(
  cors({
    origin: process.env.ORIGIN_URI,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import  useRouter  from "./routes/ocr.routes.js";
app.use("/api/v1", useRouter);

//
app.get("/", (req, res) => {
  res.send("Don't panic here i am running correctly ");
});

export { app };
