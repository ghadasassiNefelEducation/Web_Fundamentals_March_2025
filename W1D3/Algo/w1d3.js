/**
 * Finds the longest word in the given array of words.
 * @param {Array<string>} words
 * @returns {string} The longest word. If there are multiple words with the same length,
 *                   this will be the last word in the array with that length.
 */

function findLongestWord(words){
    //your code here
    // create a variable where we will store the first word in our array
    // loop through the array given in the parameter starting from 1 to the end of the array and going step by step
        // check if the current word is longer than the created variable 
            // update the created variable with the current
    // return the final value of our created variable

}

var animals = ["cat", "elephant", "dog", "sun", "bird"]; 
console.log(findLongestWord(animals));
// Output: elephant

var fruits = ["apple", "kiwi", "banana", "strawberry"]; 
console.log(findLongestWord(fruits));
// Output: strawberry

var objects = ["book", "notebook", "pen", "encyclopedia"]; 
console.log(findLongestWord(objects));
// Output: encyclopedia