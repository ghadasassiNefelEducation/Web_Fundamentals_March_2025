/**
 * Given an array of numbers, create a function that returns a new array
 * with all duplicate values removed. The order of the remaining numbers should be preserved.
 *
 * For example:
 * removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5]
 */

function removeDuplicates(numbers) {
    // initialize an empty array to store the result "result"
    // loop through the given array "numbers"
        // initialize a boolean variable to false to check if the current value exist in the result array
        // create a nested loop to loop through the result array to check if the current number exists in the result
            // check if the current value in "numbers" matches the current value in "result" numbers[i]==result[j]
                // update the boolean variable to true
                // and break the nested loop
        // check if the boolean varibale is false
            // push the current value of "numbers" to the "result"
    // return the result array

}

console.log(removeDuplicates([2, 19, 11, 2, 5, 8, 2, 19, 6, 7, 3, 3, 11, 1, 2, 5])); 
// Expected: [2, 19, 11, 5, 8, 6, 7, 3, 1]

