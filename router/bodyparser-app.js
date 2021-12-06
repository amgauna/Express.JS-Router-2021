// Backend:

import express from 'express';
import bodyParser from 'body-parser';

var urlencode = require('urlencode');
var json = require('json-middleware');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());

app.use(json);
app.use(urlencode);
app.use(multer({ dest: './uploads/' }));
app.use(bodyParser.json()); // add a middleware (so that express can parse request.body's json)
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
