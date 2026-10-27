"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new Error("Cannot find real square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new Error("InvalidOperationError: Unknown operation");
    }
}

try {
    console.log("Available operations:", operations);

    for (const operation of operations) {
        try {
            const result = calculate(operation, num1, num2);
            console.log(`${operation}: ${result}`);
        } catch (error) {
            console.log(`${operation}: ${error.message}`);
        }
    }
} catch (error) {
    console.error("Calculator error:", error.message);
} finally {
    console.log("Calculator execution completed.");
}