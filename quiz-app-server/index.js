import express from "express";
import connectToDatabase from "./db/connection.js";
import authRoutes from "./routes/auth.routes.js";
import seedRoute from "./routes/seed.route.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
//app.use("/seed", seedRoute);

app.listen(8080, async () => {
  console.log("Server running on port 8080 :)");

  connectToDatabase();
});
