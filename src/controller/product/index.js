const { Types } = require("mongoose");
const Product = require("../../database/models/product.model");
//[GET] product
const product = async (req, res) => {
	try {
		const products = await Product.find({});
		console.log(products);
		return res.status(200).json(products);
	} catch (error) {
		console.log(error);
	}
};

const productDetails = async (req, res) => {
	try {
		const productId = req.params.productId;
		if (!productId || !Types.ObjectId.isValid(productId)) {
			return res.status(400).json({ message: "Du lieu khong hop le" });
		}
		const product = await Product.findOne({
			_id: productId,
		});
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		return res.status(200).json(product);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

module.exports = { product, productDetails };
