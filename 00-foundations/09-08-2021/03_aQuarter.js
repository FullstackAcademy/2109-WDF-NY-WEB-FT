function aQuarter(callback) {
  let count = 0;

  // returns a closure that keeps track of the amount of times the callback
  //  function gets called in a closure, and also passes in the arguments
  //  from the returned function into the original callback function
  //  TIP: follow the logic with the debugger
  return (...args) => {
    count++;

    // if count if multiple of 4
    if (count % 4 === 0) {
      // run the function and pass in its arguments
      return callback(...args);
    } else {
      // return the following string
      return "something went wrong :/";
    }
  };
}

const sumCallback = (a, b) => a + b;
const functionReturned = aQuarter(sumCallback);

// the arguments passed into functionReturned is eventually passed into
//  the sumCallback in the closure
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));

console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
