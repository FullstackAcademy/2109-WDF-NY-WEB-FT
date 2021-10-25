// 1. setTimeout

// console.log('It is')
// setTimeout(function() {
//   console.log('November')
// }, 3000)
// console.log('almost')

let start = new Date;
setTimeout( (function() {
  let end = new Date;
  console.log('Time elapsed: ', end - start, 'ms')
}), 500)

while ( new Date - start < 1000) {

};
