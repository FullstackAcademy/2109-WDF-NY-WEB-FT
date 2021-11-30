/* eslint-env mocha */
const {expect} = require('chai');
const {bubbleSort} = require('./bubbleSort');

// helper functions for later specs:
const numerically = function (a, b) { return a - b; };

const generateArray = function (size, lower, upper) {
  const randomArray = [];
  while (size--) {
    let randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
};

describe('Bubble Sort', () => {
  it('sorts an empty array', () => {
    expect(bubbleSort([])).to.deep.equal([]);
  });

  it('sorts an array of one element', () => {
    expect(bubbleSort([7])).to.deep.equal( [7] );
  });

  it('sorts an array of many elements', () => {
    expect(bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0])).to.deep.equal([0, 1, 2, 3, 4, 5, 5, 7, 9]);
  });

  describe('Tests for random arrays', () => {
    for (let i = 2; i < 103; i += 20) {
      it('sorts an array of ' + i + ' random items', () => {
        const arr = generateArray(i, 0, 100);
        const sorted = arr.slice(0).sort(numerically);
        expect(bubbleSort(arr)).to.deep.equal(sorted);
      });
    }
  });
});
