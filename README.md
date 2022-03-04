# Node.JS

Testando códigos Node.JS exemplo que estão dentro de livros que estou estudando.

Tutorial Node.js (W3 Schools) = https://www.w3schools.com/nodejs/default.asp

-----------------------------------------------------------------------------------------

## Node.JS / Express.JS 

### Estrutura de diretórios e arquivos em Projetos. 

O diretório ROOT do projeto é o ponto de entrada, ou seja, a primeira impressão. 
No exemplo a seguir temos uma estrutura comum em aplicações usando o <b>framework express.js</b> 
Essa estrutura é legivel e organizada, mas tende a ficar muito grande e misturar diretórios
de códigos com diretórios de teste, build, etc, conforme o crescimento da aplicação.

Outros diretórios localizados no ROOT são scripts de suporte ou build, exemplos, documentação
e arquivos estáticos.  Um padrão comum em diversas linguagens é colocar o código da aplicação
em um diretório source normalmente chamado <b>/src/</b>.

#### /srs/
#### /src/controllers/
#### /src/middlewares/
#### /src/models/
#### /src/routes/
#### /src/server/

Dessa maneira o código da aplicação é isolado em um diretório deixando o ROOT mais limpo e 
acabando com a mistura de diretórios de código, com diretórios de testes, e diretórios de
arquivos de configuração.

Mantivemos fora o diretório <b>/tests/</b>, o motivo disso é porque testes são executados ou 
por linha de comando ou por outras ferramentas. Inclusive os <b>tests runners</b> como
<b>mocha</b> ou <b>karma</b> esperam que o diretório <b>/tests/</b> seja o diretório principal.

### /tests/

O diretório <b>/public/</b> é responsável por guardar tudo aquilo que vai ser entregue para o
usuário, usar ele no ROOT facilita a criação de rotas de acesso e também a movimentação
dos assets quando necessário.

#### /public/
#### /public/assets/
#### /public/images/
#### /public/css/
#### /public/js/

O diretório <b>/assets/</b> é buscado por diversas ferramentas e módulos de sistemas, e por
isso devemos guardar os arquivos de <b>imagens jpg, gif, png, ico, texturas</b>, arquivos 
<b>javascripts</b>, arquivos <b>sass</b> e arquivos <b>styles.css</b>, que serão utilizados 
pela aplicação.

#### /assets/
#### /assets/images/jpg/
#### /assets/images/gif/
#### /assets/images/png/
#### /assets/images/ico/
#### /assets/images/textures/
#### /assets/css/
#### /assets/js/
#### /assets/sass/
#### /assets/javascrips/
#### /assets/styles/

O diretório <b>/scripts/</b> e o diretório <b>/env/</b> são relacionados a execução da aplicação e
serão chamados por alguma linha de comando ou ferramenta externa, colocar eles em
um diretório acessível facilita a usabilidade.

#### /scripts/
#### /scripts/deploy.sh

#### /env/
#### /env/prod.env
#### /env/dev.env

Separação da execução da aplicação. Os arquivos <b>app.js</b> e <b>server.js</b> devem ser mantidos 
no diretório raiz ROOT, dessa maneira deixamos o <b>server.js</b> com a responsabilidade de chamar o
<b>app.js</b> e iniciarmos a aplicação. Assim isolamos a aplicação da execução e deixamos que ela seja
executada por quem chamar, nesse caso o <b>server.js</b>, mas poderia ser um <b>módulo</b> que vai 
fazer uma requisição <b>HTTP</b> para executar os testes e acessar rotas.

#### app.js
#### .gitignore
#### package.json
#### server.js
 
-----------------------------------------------------------------------------------------

## API Express.JS

https://expressjs.com/pt-br/guide/routing.html

https://expressjs.com/pt-br/4x/api.html

-----------------------------------------------------------------------------------------

## Tutorial / API Express.JS / Router Server 

https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction

https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters

https://www.tabnine.com/code/javascript/functions/express/Express/post

https://www.ti-enxame.com/pt/javascript/como-enviar-um-post-solicitacao-de-node.js-express/1056045498/

https://codeforgeek.com/handle-get-post-request-express-4/

https://www.codegrepper.com/code-examples/javascript/app.post+in+express

https://visionmedia.github.io/superagent/
