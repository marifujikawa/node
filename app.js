var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello Watch!");
});

app.listen(3000, function () {
    console.log("funciona na porta 3000");
});