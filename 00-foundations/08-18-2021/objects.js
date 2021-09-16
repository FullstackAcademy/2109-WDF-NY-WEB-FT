const newName = "orlando";

const person = {
  name: "orlando",
  age: 37,
  gender: "male",
  "address-info": "Jersey",
  // this is using the "shorthand" syntax for assigning a key and value
  //  in one statement, here the key will be newName and value "orlando"
  newName,
};

// we can add a new key after the object has been created
person.newName = "angel";
console.log(person.newName);

// objects can be modified after the fact
person.name = "regine";
console.log(person);

// ... but primitives (such as strings, numbers) cannot
const constantName = "orlando";

// uncomment below to see error
// constantName = "regine" // this will give you an error

// we can retrieve gender by key using the [] syntax or dot (.) syntax
console.log(person["gender"]);
console.log(person.gender);

// we can use the [] style when retrieving data from
//  keys that have symbols
console.log(person["address-info"]);

// if you want to list all keys in an object we can use for... in
for (const property in person) {
  console.log(property);
}

// we can also use for... in to retrieve object values as well
for (const property in person) {
  console.log(person[property]);
}
