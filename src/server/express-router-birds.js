<script>

// express.Router
// Use a classe express.Router para criar manipuladores 
// de rota modulares e montáveis. Uma instância de Router 
// é um middleware e sistema de roteamento completo; por
// essa razão, ela é frequentemente referida como um 
// “mini-aplicativo”

// O seguinte exemplo cria um roteador como um módulo, 
// carrega uma função de middleware nele, define algumas 
// rotas, e monta o módulo router em um caminho no 
// aplicativo principal.
// Crie um arquivo de roteador com um arquivo chamado 
// birds.js no diretório do aplicativo, com o seguinte
// conteúdo:

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;

// Em seguida, carregue o módulo roteador no aplicativo:
// O aplicativo será agora capaz de manipular solicitações 
// aos caminhos /birds e /birds/about, assim como chamar a
// função de middleware timeLog que é específica para a rota.

var birds = require('./birds');
...
app.use('/birds', birds);

</script>

