// Backend:

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json()); // add a middleware (so that express can parse request.body's json)

app.post('/api/courses', (request, response) => {
  response.json(request.body);
});

// Frontend:

fetch("/api/courses", {
  method: 'POST',
  body: JSON.stringify({ hi: 'hello' }), // convert Js object to a string
  headers: new Headers({ "Content-Type": "application/json" }) // add headers
});
