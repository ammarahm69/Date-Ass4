/**Write a JavaScript program where the program takes a random integer
between 1 and 10, and the user is then prompted to input a guess
number. The program displays a message "Good Work" if the input
matches the guess number otherwise "Not matched". */

let userInput = parseInt(prompt('Enter guess number'));
let random = Math.floor(Math.random()*10);
if(userInput == random){
    document.write(`<h1>Good Work ${userInput} === ${random} `)
}else{
    document.write(`<h1>Not matched ${userInput} !== ${random} `)
}