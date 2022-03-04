app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
