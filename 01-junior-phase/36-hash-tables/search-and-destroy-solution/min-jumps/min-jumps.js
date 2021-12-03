"use strict";

const minJumps = (array) => {
  let jumps = array.map((el) => Infinity);
  jumps[0] = 0;

  for (let i = 1; i < array.length; i++) { 
    for (let j = 0; j <= i; j++) {
      if (j + array[j] >= i) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
  }

  return jumps[array.length - 1];
};

console.log(minJumps([1, 1]));
console.log(minJumps([6, 3, 2, 1]));
console.log(minJumps([2, 8, 4, 3, 2, 9, 6, 8]));
console.log(minJumps([4, 4, 2, 7, 1, 1, 1, 1, 3, 7, 2]));
console.log(minJumps([2, 4, 1, 1, 2, 3, 7, 1, 1, 3]));

module.exports = minJumps;
