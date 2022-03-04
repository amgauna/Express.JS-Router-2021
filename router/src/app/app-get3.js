app.get('/path/:name', function(req, res) {
  res.send("tagId is set to " + req.params.name);
});
