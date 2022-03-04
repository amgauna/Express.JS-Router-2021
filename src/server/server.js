var express = require('express');
var app = express();
var router = express.Router();

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// routes will go here

app.listen(port);
console.log('Server started at http://localhost:' + port);
