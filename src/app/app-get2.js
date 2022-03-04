app.get('/path', function(req, res) {  // url: /path?name='test'
  console.log(req.query['name']);  // result: test
});
