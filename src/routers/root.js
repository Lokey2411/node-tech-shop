const express = require("express");
const route = express.Router();
const productRouter = require("./product.router");

route.get("/", (req, res) => {
	res.send("CHÙY HẤP HUYẾT!");
});

route.use("/products", productRouter);

module.exports = route;
