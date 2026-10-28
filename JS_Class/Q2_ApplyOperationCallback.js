// Q2: Higher-Order Function with Callback
// Create a function applyOperation(numbers, operation) that takes an array and a callback function.
// Use it to:
// 1. Double each number in [1, 2, 3, 4]
// 2. Square each number in [1, 2, 3, 4]

function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const inputNumbers = [1, 2, 3, 4];

// Callback 1: Double each number
const double = (num) => num * 2;
const doubledResult = applyOperation(inputNumbers, double);

// Callback 2: Square each number
const square = (num) => num * num;
const squaredResult = applyOperation(inputNumbers, square);

console.log("Original Array:", inputNumbers);
console.log("Doubled Array :", doubledResult); // [2, 4, 6, 8]
console.log("Squared Array :", squaredResult); // [1, 4, 9, 16]
