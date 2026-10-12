let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 25; // Change this value to test

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

if (userGuess < 1 || userGuess > 50) {
    console.log("Please enter a number between 1 and 50.");
} else if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
} else if (userGuess > secretNumber) {
    console.log("Too high!");
} else {
    console.log("Too low!");
}