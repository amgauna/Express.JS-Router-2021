// Usando Banco de Dados - MongoDB

// Aplicativos Express podem usar qualquer mecanismo de banco de dados suportado 
// pelo Node (o Express em si não define nenhum comportamento/requisitos adicionais
// específicos para gerenciamento de banco de dados).  Existem muitas opções, 
// incluindo PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.
// Para usá-los, você deve primeiro instalar o driver do banco de dados usando NPM. 
// Por exemplo, para instalar o driver para o popular NoSQL MongoDB você usaria o comando:
// $ npm install mongodb
// O próprio banco de dados pode ser instalado localmente ou em um servidor em nuvem. 
// No seu código Express, você precisa do driver, conecte-se ao banco de dados e 
// execute as operações criar, ler, atualizar e excluir (CRUD). O exemplo abaixo 
// (da documentação Express) mostra como você pode encontrar registros de "mamíferos" 
// usando MongoDB.

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;
     db.collection('mammals').find().toArray(function (err, result) {
  if (err) throw err;
     console.log(result); });
});
