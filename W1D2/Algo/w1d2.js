/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
// *Steps for the Solution (Using a `for` Loop)

//* 1. Initialize an Empty String:
//    - Create a variable `result` and set it to an empty string (`""`).  
//    - This will store the final repeated string.

//* 2. Loop `repeatAmount` Times:
//    - Use a `for` loop that runs from `0` to `repeatAmount - 1`.  
//    - On each iteration, append the given `str` to `result`.

//* 3. Return the Final String:
//    - After the loop completes, return the `result` variable, which now contains the repeated string.
function stringRepeat(str, repeatAmount){}

// Example usage:
console.log(stringRepeat("abc", 3)); // Output: "abcabcabc"