
/*
const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
const express = require("express");
const mathlib = require("./script");
const app = express();
const port = 3000;
// color arvoja käytetään värin säilönnässsä
var color1 = " "
var color2 = " "
var color3 = " "
//lähettää hello jos url on /
app.get("/", (req, res) => res.send("Hello"));

// ottaa query a arvon talteen
app.get("/color", (req, res) => {
    var temp ="#" + req.query.a
    console.log(temp)
// muuttaa temp arvon hexasta rgb ja string arvoksi
	
    var temp2 = mathlib.hexToRgb(temp)
    color1 = temp2.r.toString()
    color2 = temp2.g.toString()
    color3 = temp2.b.toString()
	res.send(color1 + " " + color2 + " " + color3);
});




if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;


