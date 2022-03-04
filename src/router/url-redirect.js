// express url redirect 

const app = require('express')();

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/to`

app.get('/from', (req, res) => { res.redirect('/to'); });

app.get('/to', (req, res) => res.send('Hello, World!'));
