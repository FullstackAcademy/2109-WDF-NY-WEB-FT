/* eslint-env mocha */
const {expect} = require('chai');
const {split, merge, mergeSort} = require('./mergeSort');

/*
  You can find all options for chai assertions in the docs here: https://www.chaijs.com/api/bdd/
*/
describe('Merge sort', function () {

  describe('split', function () {

    it('given one array, returns two arrays', function () {
      expect(split([])).to.deep.equal([[], []]);
    });

    it('splits array of even length', function () {
      expect(split([5, 10])).to.deep.equal([[5], [10]]);
    });

    it('splits array of odd length', function () {
      expect(split([4, 10, 20])).to.deep.equal([[4], [10, 20]]);
    });

  });

  describe('merge', function () {

    it('given two arrays, returns an array', function () {
      expect(merge([], [])).to.deep.equal([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      expect(merge([1, 5, 10], [2, 4, 11])).to.deep.equal([1, 2, 4, 5, 10, 11]);
      expect(merge([1, 9, 10], [2, 3, 8])).to.deep.equal([1, 2, 3, 8, 9, 10]);
    });

    it('works for arrays of unequal length', function () {
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).to.deep.equal([1, 2, 4, 5, 10, 20, 21, 100]);
    });

  });

  describe('mergeSort', function () {

    it('with 1 or fewer elements, returns sorted array', function () {
      expect(mergeSort([])).to.deep.equal([]);
      expect(mergeSort([1000])).to.deep.equal([1000]);
    });

    it('does the thing its supposed to do', function () {
      const sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
      expect(sorted).to.deep.equal([-90, 1, 9, 18, 56, 1234, 1994]);
    });

  });

});
