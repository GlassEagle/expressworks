var stylus = require("stylus");
var express = require("express");

var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.use(stylus.middleware(file));
app.use(express.static(file));

app.listen(port);