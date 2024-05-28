/* eslint-disable no-undef */
import mongoose from "mongoose";
import DB_NAME from "../constants.js";

//connect db function
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `mongodb connected success fully at : ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`connection error while connecting to db `, error);
    process.exit(1);
  }
};

export default connectDB;
