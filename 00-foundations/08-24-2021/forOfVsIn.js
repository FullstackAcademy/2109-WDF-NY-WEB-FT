// let's create a new array to use below
const array = [1, 2, 3, 4, 5];

// let's assign a new key with a function as its value
array.aFunction = function () {
  console.log("I am a function that is running");
};

// here we loop thru every element of the array
//  ...and its properties because for...in also extract every object property
//  let's remember that arrays are just a special type of object
for (let element in array) {
  console.log(element);
}

// here we loop thru every element of the array only
//  for...in only lists the values of an array not its properties
for (let element of array) {
  console.log(element);
}

// we can also use for...in with properties
const dog = {
  name: "sunshine",
  age: 5,
};

for (let property in dog) {
  // notice that using the square bracket syntax
  //  we can still get our value using our property name
  console.log(`${property} =>`, dog[property]);
}
