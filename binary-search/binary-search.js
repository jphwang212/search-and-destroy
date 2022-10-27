'use strict';

// Complete this algo
// [1, 2], target = 2
// [l, u]
// return true if item found / false otherwise
// O(log(n)) time complexity
// Array is ordered
const binarySearch = (array, target) => {
		let lower = 0;
		let upper = array.length - 1;

		while (lower <= upper) {
			const middle = lower + Math.floor((upper - lower) / 2);
			if (target === array[middle]) {
				return true;
			}
			if (target < array[middle]) {
				upper = middle - 1;
			} else {
				lower = middle + 1;
			}
		}
		return false;
	// let mid = Math.floor(array.length / 2);
	// let root = array[mid];
	// if(root === target){
	// 	return true;
	// } else {
	// 	if(target < root){
	// 		let retArray = array.slice(0, mid);
	// 		if(!retArray.length){
	// 			return false;
	// 		} return binarySearch(retArray, target);
	// 	}
	// 	else {
	// 		let retArray = array.slice(mid+1)
	// 		return binarySearch(retArray, target);
	// 	}
	// }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
