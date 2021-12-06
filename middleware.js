var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));

// Um exemplo de função middleware
var a_middleware_function = function(req, res, next) {
  // ... Executa alguma operação
  next(); // next() Chama o próximo middleware ou função de rotas
}

// Função adicionada com use() para todas rotas e requisições
app.use(a_middleware_function);

// Função adicionada com use() para uma rota específica
app.use('/someroute', a_middleware_function);

// função middleware adicionado para uma rota e requisição específica
app.get('/', a_middleware_function);

app.listen(3000);
