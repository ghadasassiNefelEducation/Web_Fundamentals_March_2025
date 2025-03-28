/**
 * Given an array, reverse it's items in place
 * return the array after reversing it
 * Do it in place without using any built in methods
 */

/**
 * Reverses the given arr in place without built in methods
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed
 */
function reverseArr(items){
    // create a new variable that contain an empty array to store the result that we need to return 
    // loop through the given array starting from the last index (items.length-1) to 0 going backward
        // insert the current value inside the created array using push() method
    // return the variable containing the reversed array
    
}
























// Examples for testing
var arr1 = [1, 2, 3];
console.log(reverseArr(arr1));
// Expected output: [3, 2, 1]

var arr2 = ["a", "b"];
console.log(reverseArr(arr2));
// Expected output: ["b", "a"]

var arr3 = ["a"];
console.log(reverseArr(arr3));
// Expected output: ["a"]

var arr4 = [];
console.log(reverseArr(arr4));
// Expected output: []