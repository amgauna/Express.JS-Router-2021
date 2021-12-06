var express = require('express');
var router = express.Router();

var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
