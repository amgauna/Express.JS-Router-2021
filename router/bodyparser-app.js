// Backend:

import express from 'express';
import bodyparser from 'body-parser';

var urlencode = require('urlencode');
var json = require('json-middleware');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.bodyParser());

app.use(json); // connect.json() handles application/json
app.use(urlencode); // connect.urlencoded() handles application/x-www-form-urlencoded
app.use(multer({ dest: './uploads/' })); // // multer() handles multipart/form-data
app.use(bodyparser.json()); // add a middleware (so that express can parse request.body's json)
app.use('/url/that/accepts/form-data', multipartMiddleware);

app.post('/api/courses', (request, response) => {
  response.json(request.body);
});

// Frontend:

fetch("/api/courses", {
  method: 'POST',
  body: JSON.stringify({ hi: 'hello' }), // convert Js object to a string
  headers: new Headers({ "Content-Type": "application/json" }) // add headers
});

