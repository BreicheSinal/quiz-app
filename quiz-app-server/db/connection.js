import { connect } from "mongoose";
import dotenv from "dotenv";

const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to db!");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
