import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const app = express();

// Connect to MongoDB
mongoose
  .connect(DB)
  .then((conn) => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.json({ message: "Handled" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
