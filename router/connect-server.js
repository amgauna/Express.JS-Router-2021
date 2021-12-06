// example using just connect

var connect = require('connect');
var url = require('url');
var qs = require('qs');
var server = connect(
  connect.bodyParser(),
  connect.router(function(app) {
    app.post('/userlogin', function(req, res) {
      // the bodyParser puts the parsed request in req.body.
      var parsedUrl = qs.parse(url.parse(req.url).query);
      var email = parsedUrl.email || req.body.email;;
    });
  })
);
