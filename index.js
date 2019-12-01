exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
export { default as bar } from './bar.js';
export { default as foo } from './foo.js';
