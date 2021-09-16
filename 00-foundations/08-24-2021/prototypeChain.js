// this function is generally equivalent to
//    the class syntax written below
function Animal(type) {
  this.isAlive = true;
  this.type = type;
  doSomething = function() {
    return "something";
  };
}

// __proto__ => depracated way we retrieve the object prototype... use
//  Object.getPrototypeOf([Object_name]) instead
// [Object_name].prototype = the property we use to assign things to the 
//  the prototype
// [[Prototype]] = that text that MDN uses to represent the prototype of
//  an object

Animal.prototype.doSomething = function() {
  return "something";
};

const animal = new Animal("mammmal");

//[[ Prototype ]]

console.log(animal.doSomething());

// class syntax is just syntactic sugar for using function
//    constructors and setting prototypes
// class Animal {
//   constructor(type) {
//     this.isAlive = true;
//     this.type = type;
//   }
// }

function Person() {
  this.name = "Orlando";
  this.age = 35;
  this.gender = "male";
}

// one way to inherit methods from the Animal object
//    is to create a new Animal object and use that as the prototype
//    of Person. However, in the example this will make it so that
//    its inheriting the values of a reptile animal which is a little too specific
// Person.prototype = new Animal("reptile");

// really what we want to point the Person prototype to the
//    the prototype of Animal which can be achieved using the following
//    code
Person.prototype = Object.create(Animal.prototype);

const orlando = new Person();

// now we log the doSomething function to prove that we have inherited
//    some Animal behavior
// console.log(orlando.doSomething());
