// Q1: Callback Flow Demonstration
// Write a function greetUser(name, callback) that prints "Hello <name>" 
// and then executes a callback function showEndMessage() which prints "Welcome to the course!".

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    // Check if callback is provided and execute it
    if (typeof callback === "function") {
        callback();
    }
}

// Demonstrating the callback flow
console.log("=== Demonstrating Callback Flow ===");
greetUser("Aman", showEndMessage);
