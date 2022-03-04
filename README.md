# Node.JS

Testando códigos Node.JS exemplo que estão dentro de livros que estou estudando.

Tutorial Node.js (W3 Schools) = https://www.w3schools.com/nodejs/default.asp

-----------------------------------------------------------------------------------------

## Node.JS / Express.JS 

### Estrutura de diretórios e arquivos em Projetos. 

O diretório ROOT do projeto é o ponto de entrada, ou seja, a primeira impressão. 
No exemplo a seguir temos uma estrutura comum em aplicações usando o framework express.js 
Essa estrutura é legivel e organizada, mas tende a ficar muito grande e misturar diretórios
de códigos com diretórios de teste, build, etc, conforme o crescimento da aplicação.

Outros diretórios localizados no ROOT são scripts de suporte ou build, exemplos, documentação
e arquivos estáticos.  Um padrão comum em diversas linguagens é colocar o código da aplicação
em um diretório source normalmente chamado /src/.

Dessa maneira o código da aplicação é isolado em um diretório deixando o ROOT mais limpo e 
acabando com a mistura de diretórios de código, com diretórios de testes, e diretórios de
arquivos de configuração.

Mantivemos fora o diretório /tests/ , o motivo disso é porque testes são executados ou 
 por linha de comando ou por outras ferramentas. Inclusive os ''tests runners'' como
 ''mocha'' ou ''karma'' esperam que o diretório /tests/ seja o diretório principal.
 
O diretório /public/ é responsável por guardar tudo aquilo que vai ser entregue para o
usuário, usar ele no ROOT facilita a criação de rotas de acesso e também a movimentação
dos assets quando necessário.

O diretório /scripts/ e o diretório /env/ são relacionados a execução da aplicação e
serão chamados por alguma linha de comando ou ferramenta externa, colocar eles em
um diretório acessível facilita a usabilidade.

* /assets/
* /assets/images/jpg/
* /assets/images/gif/
* /assets/images/png/
* /assets/images/ico/
* /assets/images/textures/
* /assets/css/
* /assets/js/
* /assets/sass/
* /assets/javascrips/
* /assets/styles/

* /env/
* /env/prod.env
* /env/dev.env

* /public/

* /scripts/
* /scripts/deploy.sh

* /src/
* /src/controllers/
* /src/middlewares/
* /src/models/

* /tests/

* app.js
* .gitignore
* package.json
* server.js
 
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
