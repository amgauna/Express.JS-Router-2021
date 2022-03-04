// Servindo arquivos estáticos

// Você pode usar o middleware express.static para servir arquivos estáticos, 
// incluindo suas imagens, CSS e JavaScript (static() é a única função de 
// middleware que é realmente parte do Express). Por exemplo, você usaria a
// linha abaixo para exibir imagens, arquivos CSS e arquivos JavaScript de 
// um diretório chamado 'public' no mesmo nível onde você chama o nó:

app.use(express.static('public'));
app.use(express.static('media'));

// ou

app.use('/media', express.static('public'));
