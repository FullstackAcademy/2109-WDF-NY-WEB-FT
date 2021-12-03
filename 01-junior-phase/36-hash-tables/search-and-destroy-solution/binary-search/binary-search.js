"use strict";

// [-14, -3, -1, 0, 24, 49, 60], 24
const binarySearch = (
  array,
  target,
  leftIndex = 0,
  rightIndex = array.length
) => {
  let midpointIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (rightIndex < leftIndex) {
    return false;
  }

  if (array[midpointIndex] === target) {
    return true;
  } else if (array[midpointIndex] > target) {
    rightIndex = midpointIndex - 1;
    return binarySearch(array, target, leftIndex, rightIndex);
  } else {
    leftIndex = midpointIndex + 1;
    return binarySearch(array, target, leftIndex, rightIndex);
  }
};

console.log(binarySearch([-14, -3, -1, 0, 24, 49, 60], 1000));

module.exports = binarySearch;
