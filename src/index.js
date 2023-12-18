const express = require("express");
const config = require("./config/config.js");
const route = require("./routers/root.js");
const db = require("./database/config.js");
const app = express();
const port = config.port;

db.connect();

app.use(route);

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
