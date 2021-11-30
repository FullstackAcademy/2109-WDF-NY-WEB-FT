// Helper functions for bubbleSort:
const inOrder = function (array, index) {
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
};

const swap = function (array, index) {
  const oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
};

const bubbleSort = function (array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) { // passes
    sorted = true; // assume until proven incorrect
    for (let j = 0; j < end; j++) { // bubbling
      if (!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }
  return array;
};

// In-place algorithms use only a small, constant amount of extra space.
// Bubble sort is an in-place algorithm;
// it has good space complexity at O(1), but bad time complexity O(n^2).

module.exports = {
  bubbleSort
};
