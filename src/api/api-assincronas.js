// Usando APIs assíncronas

// O código JavaScript frequentemente usa APIs assíncronas em vez de síncronas
// para operações que podem levar algum tempo para serem concluídas. 
// Uma API síncrona é aquela em que cada operação deve ser concluída antes que
// a próxima operação seja iniciada. Por exemplo, as seguintes funções de log 
// são síncronas e imprimirão o texto no console em ordem (Primeiro, Segundo).

console.log('Primeiro');
console.log('Segundo');

// Em contrapartida, uma API assíncrona é aquela em que a API iniciará uma 
// operação e retornará imediatamente (antes da conclusão da operação). 
// Assim que a operação terminar, a API usará algum mecanismo para executar 
// operações adicionais. 
// Por exemplo, o código abaixo imprimirá "Segundo, Primeiro". Isso porque, 
// mesmo que o método setTimeout() seja chamado primeiro e retorna e 
// imediatamente, a operação precisa de três segundos para finalizar.

setTimeout(function() {
   console.log('Primeiro');
   }, 3000);
console.log('Segundo');
