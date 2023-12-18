const express = require("express");
const productController = require("../controller/product");
const route = express.Router();

route.get("/", productController.product);
route.get("/:productId", productController.productDetails);

module.exports = route;
