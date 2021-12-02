'use strict';
const {expect} = require('chai');
const minJumps = require('./min-jumps');

const test1 = [1,1];
const test2 = [6,3,2,1];
const test3 = [2,8,4,3,2,9,6,8];
const test4 = [4,4,2,7,1,1,1,1,3,7,2];
const test5 = [2,4,1,1,2,3,7,1,1,3];

describe('min number of jumps', () => {
	it('returns the min # of jumps to cross an array of positive integers', () => {
		expect(minJumps(test1)).to.equal(1);
		expect(minJumps(test2)).to.equal(1);
		expect(minJumps(test3)).to.equal(2);
		expect(minJumps(test4)).to.equal(2);
		expect(minJumps(test5)).to.equal(4);
		
		
		//WRITE YOUR OWN TESTS HERE. Include >=1 edge case :)
	});
});
