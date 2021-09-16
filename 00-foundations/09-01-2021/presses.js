// using an object keyed by character
// function presses(keys) {
//   const keysObject = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 1,
//     e: 2,
//     f: 3,
//     g: 1,
//     h: 2,
//     i: 3,
//     j: 1,
//     k: 2,
//     l: 3,
//     m: 1,
//     n: 2,
//     o: 3,
//     p: 1,
//     q: 2,
//     r: 3,
//     s: 4,
//     t: 1,
//     u: 2,
//     v: 3,
//     w: 1,
//     x: 2,
//     y: 3,
//     z: 4,
//     '*': 1,
//     ' ': 1,
//     '#': 1,
//     1: 1,
//     2: 4,
//     3: 4,
//     4: 4,
//     5: 4,
//     6: 4,
//     7: 5,
//     8: 4,
//     9: 5,
//   };

//   let totalKeypresses = 0;

//   for (let i = 0; i < keys.length; ++i) {
//     totalKeypresses += keysObject[keys[i].toLowerCase()];
//   }

//   return totalKeypresses;
// }

// using a character string
// function presses(keys) {
//   // each character is positioned in such a way to indicate
//   //  how many button presses would generate that character on a keypad
//   //  e.g => g is in position 15, when you divide by 5 and take the remainder
//   //    and add 1 it would give you the button press count of 1
//   const keyString = '1____abc2_def3_ghi4_jkl5_mno6_pqrs7tuv8_wxyz9*____ ____#';

//   let count = 0;

//   for (let key of keys.toLowerCase()) {
//     count += (keyString.indexOf(key) % 5) + 1;
//   }

//   return count;
// }

// same as prior function except that we use a declarative / functional style here
// function presses(keys) {
//   // each character is positioned in such a way to indicate
//   //  how many button presses would generate that character on a keypad
//   //  e.g => g is in position 15, when you divide by 5 and take the remainder
//   //    and add 1 it would give you the button press count of 1
//   const keyString = '1____abc2_def3_ghi4_jkl5_mno6_pqrs7tuv8_wxyz9*____ ____#';

//   // first we lowercase, then split, convert each array element into a
//   //  numeric value representing how many keypresses would need to made for that
//   //  character and then add them all together
//   return keys
//     .toLowerCase()
//     .split("")
//     .map((key) => (keyString.indexOf(key) % 5) + 1)
//     .reduce((sum, currentValue) => sum + currentValue);
// }

// using an object keyed by button presses count
function presses(keys) {
  const keysObject = {
    1: '1adgjmptw* #',
    2: 'behknqux',
    3: 'cfilorvy',
    4: 'sz234568',
    5: '79',
  };

  let count = 0;

  // loop thru every character within keys
  for (let key of keys.toLowerCase()) {
    // loop thru every index in keysObject
    for (let index in keysObject) {
      // if character is found within index add index to count
      if (keysObject[index].indexOf(key) >= 0) {
        count += Number(index);
      }
    }
  }

  return count;
}

console.log(presses('I am traveling to Chicago and staying on 1st street'));
