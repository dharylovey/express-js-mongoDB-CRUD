
import express from "express";
import { getProducts, getProductById, createProduct, updateProductById, deleteProductById } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;
