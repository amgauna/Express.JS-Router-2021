<script>

// Em seguida, carregue o módulo roteador no aplicativo:
// O aplicativo será agora capaz de manipular solicitações 
// aos caminhos /birds e /birds/about, assim como chamar a
// função de middleware timeLog que é específica para a rota.

var birds = require('./birds');
...
app.use('/birds', birds);

</script>