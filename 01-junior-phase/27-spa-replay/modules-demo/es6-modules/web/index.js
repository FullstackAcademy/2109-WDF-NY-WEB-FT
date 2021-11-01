// Synchronous ES6 import
// This is a default import
import operations from './operations.js';
// This is NOT destructuring it is a named import
import { add, subtract } from './operations.js';

// You can combine the default import and the named imports in one line
// import operations, { add, subtract} from './operations.js';

console.log(add(1, 2));

console.log(operations.add(1, 2));

// Async import
async function main() {
  // This is an async dynamic import
  const operations = await import('./operations.js');
  console.log(operations.subtract(6, 3));
}

main();
