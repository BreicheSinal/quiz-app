import express from "express";
import connectToDatabase from "./db/connection.js";
const app = express();

app.listen(8080, async () => {
  console.log("Server running on port 8080 :)");

  connectToDatabase();
});
