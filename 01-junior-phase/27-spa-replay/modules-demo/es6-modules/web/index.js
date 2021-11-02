// IMPORTING IN ES6
// Synchronous ES6 import
import cats, {add, subtract} from "./operations.js"
// Multiply is the default export
// Add & subtract are the named exports

// Async ES6 import
async function main () {
  const multiply = await import('./operations.js');
  console.log(multiply(6, 3));
}

main()
