// superagent, servidor que é simliar para jQuery.

var sa = require('superagent');
sa.post('url')
  .send({key: value})
  .end(function(err, res) {
    //TODO
  });
