import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to db!");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
