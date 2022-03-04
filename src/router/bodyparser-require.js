var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next();
})
