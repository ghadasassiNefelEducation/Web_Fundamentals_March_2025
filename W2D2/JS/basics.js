// *Variables
// !Definition: variables are conatiners used to store data that can be used or modified in our program
// *Declaration
var firstName;
// *Assign a value to the variable
firstName = "Joe";

// *DATA TYPES
// primitive data types
// string
var text = "This is a text";
// boolean
var test = true;
// number
var price = 1.9 ;
// undefined
var emptyVar;
// null
var nullVar = null;
// Complex data types
// array
var stacks = ["Python", "MERN", "Java", "C#", 20, 1, true, null]

// *Order  of operators
// !PEMDAS
console.log(10 * 2 - 1 + 5 / 3^2)
//          10 * 2 - 1 + 5 / 9
//           20 - 1 + 0.5555556
//           19 + 0.5555556
//             19.5555556

//* Comparison operators
var firstValue = 5;
var secondValue = "5";
console.log(firstValue == secondValue);
console.log(typeof(firstValue) == typeof(secondValue));
 var x = 10;
console.log(10 <= x);
// *Logical Operators
console.log(10 > x && 10 == x);
// AND : a && b
//       1 && 0 -> 0
//       1 && 1 -> 1
//       0 && 0 -> 0
//       0 && 1 -> 0
// OR : a || b
//      1 || 1 -> 1
//      1 || 0 -> 1
//      0 || 1 -> 1
//      0 || 0 -> 0
// NOT var a = 1;
// *       !a -> 0  


//* conditions
// Definition: used to perform different actions based on different conditions
// if / else if / else
var temperature = 2;
if(temperature >= 35){
    console.log("It's too hot");
}else if(temperature <= 34 && temperature >= 10){
    console.log("It's a good day");
    
}else{
    console.log("It's too cold");
    
}

// *loops
// Definition: Repeats a block of code a specific number of times
// *FOR
for(var i = 0; i <= 6; i++){
    console.log(i);
    
}
// console.log(i);
// *WHILE
var count = 0;
while(count <= 6){
    console.log(count);
    count++;
    
}

// *Functions
// Defintion: functions are blocks of code that perform a task and can be reused on demand
function greeting(personName){
    console.log(`Hello ${personName}`);
    return `Hello ${personName}`;
}
var message = greeting("Mustapha");
console.log(message);
