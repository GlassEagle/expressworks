
var express = require("express");
require("jade");

var port = process.argv[2];
var file = process.argv[3];

var app = express();
app.set("view engine", "jade");
app.set("views", file);

app.get("/home", function (req, res) {
    var date = new Date();
    res.render("index", {date: date.toDateString()});
});

app.listen(port);