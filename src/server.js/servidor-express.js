<script>
var express = require("express");
var app = express();
var port = 3003;

// GET method route
// Este caminho de rota corresponde a 
// solicitações à rota raiz, /.
app.get('/', function (req, res) {
  res.send('root');
});

// Um método de roteamento é derivado a partir
//  de um dos métodos HTTP, e é anexado a uma
//  instância da classe express.
// o código a seguir é um exemplo de rotas para
// a raiz do aplicativo que estão definidas para
// os métodos GET e POST.

// POST method route
// Este caminho de rota irá corresponder 
// a solicitações ao /about.
app.post('/about', function (req, res) {
  res.send('about');
});

// Este caminho de rota irá corresponder a 
// solicitações ao /random.text.
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

// o manipulador irá ser executado para solicitações
// para “/secret” se você estiver usando GET, POST, 
// PUT, DELETE, ou qualquer outro método de solicitação 
// HTTP que é suportado no módulo http.

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

// Manipulador de rota, com uma função de retorno de chamada
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

// Métodos de resposta
// Os métodos do objeto de resposta (res) na seguinte
// tabela podem enviar uma resposta ao cliente, e 
// finalizar o ciclo solicitação-resposta. Se nenhum
// destes métodos forem chamados a partir de um
// manipulador de rota, a solicitação do cliente será 
// deixada em suspenso.

// Método Descrição
// res.download() =	Solicita que seja efetuado o download de um arquivo
// res.end() = Termina o processo de resposta.
// res.json() = Envia uma resposta JSON.
// res.jsonp() = Envia uma resposta JSON com suporta ao JSONP.
// res.redirect() =	Redireciona uma solicitação.
// res.render() = Renderiza um modelo de visualização.
// res.send() =	Envia uma resposta de vários tipos.
// res.sendFile	= Envia um arquivo como um fluxo de octeto.
// res.sendStatus() = Configura o código do status de resposta e
// envia a sua representação em sequência de caracteres como o
// corpo de resposta.

// app.route()
// É possível criar manipuladores de rota encadeáveis para 
// um caminho de rota usando o app.route(). Como o caminho 
// é especificado em uma localização única, criar rotas 
// modulares é útil, já que reduz redundâncias e erros 
// tipográficos. Para obter mais informações sobre rotas, 
// consulte: documentação do Router().

// Aqui está um exemplo de manipuladores de rotas encadeáveis 
// que são definidos usando app.route().

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
  
// ouvindo a porta do servidor
app.listen(port, function(err) {
if (err) console.log(err);
console.log("ouvindo a porta do Servidor:", port);
});
</script>
