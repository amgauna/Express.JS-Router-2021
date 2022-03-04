// Importando e criando módulos

var express = require('express');
var app = express();

// Para tornar os objetos disponíveis fora do módulo, você precisa apenas 
// atribuí-los ao objeto exports. Por Exemplo, o módulo square.js abaixo 
// é um arquivo que exporta os métodos area() e perimeter():

exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };

// Nós podemos importar este módulo usando require(). Depois, conecte 
// ao(s) método(s) exportado(s) como mostrado a seguir:

var square = require('./square'); // Chamamos o arquivo utilizando o require()
console.log('The area of a square with a width of 4 is ' + square.area(4));

// Se você deseja exportar um objeto completo em uma atribuição, em vez 
// de criar uma propriedade de cada vez, atribua ao module.exports como 
// mostrado abaixo (você também pode fazer isso para tornar a raiz do
// objeto exporter um construtor ou outra função):

module.exports = {
  area: function(width) { return width * width; },
  perimeter: function(width) { return 4 * width; }
};

