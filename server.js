import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import productRoute from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_STRING = process.env.MONGODB_STRING;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRoute);

mongoose.connect(MONGODB_STRING).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
