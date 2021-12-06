// express url redirect 

const app = require('express')();
2
​
3
// The `res.redirect()` function sends back an HTTP 302 by default.
4
// When an HTTP client receives a response with status 302, it will send
5
// an HTTP request to the URL in the response, in this case `/to`
6
app.get('/from', (req, res) => {
7
  res.redirect('/to');
8
});
9
app.get('/to', (req, res) => res.send('Hello, World!'));
