const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.post("/result", (req, res, next) => {
	const memberID = req.body.id;
	const PATH = `./data/${memberID}.json`;
	const bodyStr = JSON.stringify(req.body, null, 2);

	try {
		if (!fs.existsSync(PATH)) {
			fs.writeFileSync(PATH, bodyStr);
		} else {
			console.log("!there is memeber has same ID aleady!");
		}
	} catch (e) {
		console.error(e);
	} finally {
		res.json(req.body);
	}
});
app.get("/result/:memberID", (req, res, next) => {
	const memberID = req.params.memberID;
	const PATH = `./data/${memberID}.json`;
	fs.readFile(PATH, (err, data) => {
		console.log("DATA: ", data.toString());
		res.send(data.toString());
	});
});

app.listen(PORT, () => {
	console.log("Server connected at Port", PORT);
});

process.argv.forEach((val, index) => {
	console.log(index + ": " + val);
});
console.log(process.cwd());

module.exports = app;
