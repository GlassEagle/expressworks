var express = require("express");
var bodyparser = require("body-parser");

var port = process.argv[2];

var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", function (req, res) {
    var str = req.body.str.split("").reverse().join("");
    res.end(str);
});
app.listen(port);