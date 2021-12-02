'use strict';

const binarySearch = (array, target, left = 0, right = array.length) => {
	let toCheck = Math.floor((left + right) / 2 );
	if(right < left){
		return false
	} 
	if(array[toCheck] === target){
		return true	
	} else if(array[toCheck] > target){
		right = toCheck - 1
		return binarySearch(array, target, left, right);
	} else {
		left = toCheck + 1
		return binarySearch(array, target, left, right);
	}
};

module.exports = binarySearch