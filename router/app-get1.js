app.get('/path/:name', function(req, res) { // url: /path/test
  console.log(req.params.name);  // result: test
});
