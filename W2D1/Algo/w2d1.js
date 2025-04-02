var floor = Math.floor(1.8);
// result: 1
var ceiling = Math.ceil(Math.PI);
// result 4
var random = Math.random();
// random number between 0 and 1

var liferAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomAnswer(){
    //Your code here
    // create variable to store a value between 0 and 1
    var result= Math.random()
    // create another variable to store a value between 0 and the length of our list 
    var result1= result*liferAnswers.length
    // create another varible to store the integer value of our previous varible that will represent the index
    var result2= Math.floor(result1)
    // return the value in the random index  
    return liferAnswers[result2]

}

console.log(randomAnswer());