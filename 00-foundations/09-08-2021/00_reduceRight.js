// this function accepts an array of items, the starting pooint and
//  a function to run after every iteration called a combiner
function reduceRight(array, startingPoint, combiner) {
  let output = startingPoint;

  // here we use a for loop so we can loop in reverse
  for (let i = array.length - 1; i >= 0; --i) {
    // we execute the comber function by passing it the values it needs
    output = combiner(output, array[i]);
  }

  return output;
}

// we create a sum callback function
const sum = (prev, curr) => prev + curr;

// here we pass in our callback function into the reduceFunction
//  so it can be run once per iteration of the loop
console.log(reduceRight(["o", "l", "l", "e", "h"], "", sum));
