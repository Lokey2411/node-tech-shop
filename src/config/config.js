const env = require("dotenv");

env.config();

const configApp = {
	port: process.env.PORT,
	database: {
		url: process.env.MONGODB_URI,
	},
};

module.exports = configApp;
