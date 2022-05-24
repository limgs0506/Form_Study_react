const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.post("/result", (req, res, next) => {
	const body = JSON.stringify(req.body, null, 2);

	try {
		fs.writeFileSync("./data/account.json", body);
	} catch (e) {
		console.error(e);
	} finally {
		res.json(body);
	}
});

app.listen(PORT, () => {
	console.log("Server connected at Port", PORT);
});

process.argv.forEach((val, index) => {
	console.log(index + ": " + val);
});
console.log(process.cwd());

module.exports = app;
