// This factory function creates a new object
//    with the keys name, gender and nameAndGender
//    the last of which is a function
function dogFactory(name, gender) {
  // some other code here

  return {
    name: name,
    gender: gender,
    nameAndGender: function () {
      return `${name} : ${gender}`;
    },
  };
}

// The downside of the above approach is that we
//    create a new function every time. The solution to this
//    problem is to add nameAndGender to the prototype like so:
Dog.prototype.nameAndGender = function () {
  return `${this.name} : ${this.gender}`;
};

//  This ensures that we create the function once and any
//    functions with the Dog prototype will acquire the same
//    behavior.

//  The following the Dog function constructor
//    which behaves similar to the factory but must be
//    initialized using new operator.
function Dog(name, gender, type = null) {
  this.name = name;
  this.gender = gender;
  this.type = type;
}

// Notice the difference in how we use dogFactory
//    vs the Dog function constructor
const salmon = dogFactory("salmon", "female");
const optimusPrime = new Dog("Optimus Prime", "female");
const max = new Dog("max", "non-binary", "pug");

// Each of these should display the objects information
//  along with its methods
console.log(salmon, optimusPrime, max);

function GoldenRetriever(name, gender) {
  this.name = name;
  this.gender = gender;
  this.type = "golden retriever";
}

// Here we assign the prototype of GoldenRetriever
//  to be set to the Dog.prototype
GoldenRetriever.prototype = Object.create(Dog.prototype);

const lady = new GoldenRetriever("lady", "female");

// Because we set our prototype for the GR objec to the Dog prototype
//  we have access to Dog's methods
console.log(lady.nameAndGender());
