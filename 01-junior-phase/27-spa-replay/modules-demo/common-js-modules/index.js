const operations = require('./operations')
// Regular javascript destructuring
const { add, subtract } = require('./operations')

console.log(add(1, 2))
console.log(operations.add(1, 2))
