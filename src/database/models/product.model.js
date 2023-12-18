const { Schema, model } = require("mongoose");

const Product = new Schema(
	{
		name: { type: String, require: true },
		image: { type: String, require: true },
		description: { type: String, require: true },
		category: { type: String, require: true },
	},
	{
		timestamps: true,
	}
);

module.exports = model("products", Product); // khai Báo model
