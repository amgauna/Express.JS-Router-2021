require('launch-json');
require('launch-json')('myconfig');
require('launch-json')('dev'); // dev will load

process.env['NODE_ENV']; // development
process.env['theFox']; // quick
process.env['theDog']; // lazy

module.exports = require("expert.js");

const server = require('server');
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

export { default as bar } from './bar.js';
export { default as foo } from './foo.js';
