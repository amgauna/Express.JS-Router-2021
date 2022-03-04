var express = require('express');
var router = express.Router();
var app = express();

app.all('/secret', function(req, res, next) {
  console.log('Acessando a sessão secreta...');
  next(); // passa o controle para o próximo manipulador
});
