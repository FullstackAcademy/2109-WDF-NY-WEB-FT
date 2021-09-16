// two ways of writing a reducer arrow function
const sumCallbackArrow = (sum, currentValue) => sum + currentValue;
const sumCallbackArrowLonger = (sum, currentValue) => {
  return sum + currentValue;
};

// alternative way of writing a reducer using inline function
const sumCallbackInline = function (sum, currentValue) {
  return sum + currentValue;
};

// an example of using reduce to get a count of vowels
function vowelsCount(string) {
  const initialObject = { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 };

  // here we define a callback arrow function that we will use as our
  //  reducer function below
  const reducerCallback = (outputObject, currentCharacter) => {
    if ("aeiou".includes(currentCharacter)) {
      outputObject[currentCharacter]++;
      outputObject.total++;g
    }

    return outputObject;
  };

  return string
    .toLowerCase() // orlando caraballo
    .split("") // ['o', 'r', 'l', 'a'...]
    .reduce(reducerCallback, initialObject); // { a: 4, e: 0, i: 0, o: 3, u: 0, total: 7 }
}

console.log(vowelsCount("Orlando Caraballo"));
