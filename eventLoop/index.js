console.log('initializing script execution');

process.nextTick(() => {
  console.log('nextTick callback executed');
});

setTimeout(() => {
  console.log('setTimeout callback executed');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback executed');
});

import fs from 'node:fs';

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  console.log('readFile callback executed');
});

console.log('finished script execution');

