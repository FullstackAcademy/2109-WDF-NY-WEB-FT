const split = function (array) {
  const center = array.length / 2,
        left = array.slice(0, center),
        right = array.slice(center);
  return [left, right];
};

const merge = function (left, right) {
  const merged = [];
  let leftIdx = 0,
      rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
};

const mergeSort = function (array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
        left = splits[0],
        right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
};

module.exports = {
  split,
  merge,
  mergeSort
}
