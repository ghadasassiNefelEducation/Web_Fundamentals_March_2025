/**
 * Given an array of numbers, create a function that returns a new array 
 * where negative values were replaced with the string ‘Dojo’.   
 * For example, replaceNegatives([1, 2, -3, -5, 5]) should return [1, 2, "Dojo", "Dojo", 5].
 * */

function replaceNegatives(numbers) {
    //your codne here
    for (var i=0 ;i< numbers.length; i++) {//we created the for loop to look through the array numbers starting from 0 stoping at the last number in the array and going 1 step each time//
        if (numbers[i]<0){//we did a condition to check if each value of the array is negative and if it is we replace it  with Dojo word
            numbers[i]="Dojo";
            
        }
        
    }
    return numbers;// after finishing all the array values  we return the updatesd array
}

console.log(replaceNegatives([3, -4, 9, 5, -11, 0, -1, -2, 2, -7, 6]));