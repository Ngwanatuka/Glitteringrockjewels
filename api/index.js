import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error: ", err));

const app = express();

app.use(express.json());

app.get("/api/test", () => {
  console.log("Test API");
});

app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
