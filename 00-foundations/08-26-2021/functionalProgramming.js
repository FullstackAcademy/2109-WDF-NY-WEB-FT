function addValuesAndDoSomething(value1, value2, aFunction) {
  const sum = value1 + value2;

  const modifiedValue = aFunction(sum);

  return modifiedValue;
}

function consoleLogger() {
  console.log("hello class");
}

// // with functional programming we can provide the addValuesAndDoSomething
// //  function with an arrow function that will be executed when running
// //  addValuesAndDoSomething... 🤯
const returnValue = addValuesAndDoSomething(2, 2, (summedUp) => {
  return { sum: summedUp, square: summedUp * summedUp };
});

console.log(returnValue);

// -------------------------------------------------------------------------

const array = [1, 2, 3, 4, 5];

// we can chain functions together to constantly apply logic to our array
//  and store in the newArray variable
const newArray = array
                  .map((number) => number * 2)
                  .filter((number) => number > 4)
                  .reduce((previousValue, currentValue) => {
                    return previousValue + currentValue
                  });

console.log(array);
console.log(newArray);
