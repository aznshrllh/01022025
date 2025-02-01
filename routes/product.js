const express = require("express");
const router = express.Router();

const { validateProduct } = require("../middlewares/productValidation");
const {
  getAllProducts,
  getSellableProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/sellable", getSellableProducts);
router.get("/:id", getProductById);
router.post("/", validateProduct, createProduct);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
