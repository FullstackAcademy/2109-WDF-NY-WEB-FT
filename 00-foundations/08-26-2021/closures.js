function closureExample(value) {
  const person = { name: "orlando", age: 37 };

  return function () {
    person.value = value;

    return person;
  };
}

// here we are taking the inner function defined on line
//  4 and giving it a name
// interesting... 🤔
const functionFromWithin = closureExample(10);

// now that we named it, we can execute it normally
//  with some added secret sauce...
console.log(functionFromWithin());

// -------------------------------------------------------------------------

// here we create a function that returns a function
function counterGenerator() {
  let count = 0;

  function changeBy(value) {
    count += value;
  }

  // the object returned from this function still has access to the
  //  local variables within the scope of the outer function "counterGenerator"
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return count;
    },
  };
}

// here we create a counter using the counterGenerator function
const counter1 = counter1Generator();

// Notice how below we are using the functions in the object returned
//  to modify the internal value of count or return the internal count

// the counter1.value() function returns 0
console.log("The counter1 value is: ", counter1.value()); // The counter1 value is: 0

// this will increase the internal count by 1 each time 👍
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();

console.log("The counter1 value is: ", counter1.value()); // The counter1 value is: 5

// this will also decrease the internal count by 1 each time 👍
counter1.decrement();
counter1.decrement();

console.log("The counter1 value is: ", counter1.value()); // The counter1 value is: 3

// here we create another counter and notice how it does NOT share
//  the same value for "count" as counter1
const counter2 = counterGenerator();
console.log(counter2.value());
