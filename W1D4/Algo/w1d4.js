/**
 * Given an array and an item to search for
 * return the index where the item is found,
 * return -1 to represent not found
 */

/**
 * Finds the index from the given array where the given item is found
 * @param {Array<string>} items An array of any kind of items
 * @param {any} searchItem The item to find
 * @returns {number} The index of found item, or -1 if not found
 */

function indexOf(items, searchItem){
    // loop through our given array, starting from 0 to the end of the array and going step by step
        // check if the item that we are searching for exist in the current index of our items array
            // return the current index
    // return -1 if we didn't found the searchItem
}

// Examples to test 
var arr1 = ["a", "b", "c"];
var searchItem1 = "c";
console.log(indexOf(arr1, searchItem1));
// Expected Output: 2

var arr2 = ["a", "b", "c"];
var searchItem2 = 5;
console.log(indexOf(arr2, searchItem2));
// Expected Output: -1

var arr3 = ["c", "a", "b", "c"];
var searchItem3 = "c";
console.log(indexOf(arr3, searchItem3));
// Expected Output: 0

var arr4 = [];
var searchItem4 = 5;
console.log(indexOf(arr4, searchItem4));
// Expected Output: -1