var express = require("express");
var fs = require("fs");

var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.get("/books", function(req, res){
    fs.readFile(file, function(err, data){
        if(err){
            res.send(500);
        }
        
        res.json(JSON.parse(data));
    });
});

app.listen(port);