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
	const bodyStr = JSON.stringify(req.body, null, 2);
	const PATH = `./data/${memberID}.json`;
	try {
		if (!fs.existsSync(PATH)) {
			fs.writeFileSync(PATH, bodyStr);
		} else {
			console.log("!there is memeber has same ID aleady!");
			/*
				한 파일 안에서 해결하려던 흔적
				fs.readFile(PATH, (err, data) => {
				let obj = [];
				obj.push(JSON.parse(data));
				obj.push(req.body);

				const objStr = obj.map((element) => JSON.stringify(element, null, 2));
				console.log("obj: ", objStr.toString());
				fs.appendFileSync(PATH, data);
			}) 
			*/
		}
	} catch (e) {
		console.error(e);
	} finally {
		res.json(req.body);
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
