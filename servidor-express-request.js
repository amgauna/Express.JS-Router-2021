<script>

// Como enviar um POST solicitação de node.js Express?

var request = require('request');
 function updateClient(postData){
            var clientServerOptions = {
                uri: 'http://'+clientHost+''+clientContext,
                body: JSON.stringify(postData),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            request(clientServerOptions, function (error, response) {
                console.log(error,response.body);
                return;
            });
        }
Para que isso funcione, seu servidor deve ser algo como: 

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/sample/put/data', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

var http = require('http');

var options = {
  Host: 'www.Host.com',
  path: '/',
  port: '80',
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("data");
req.end();

você pode tentar assim:

var request = require('request');
request.post({ headers: {'content-type' : 'application/json'}
               , url: <your URL>, body: <req_body in json> }
               , function(error, response, body){
   console.log(body); 
}); 

