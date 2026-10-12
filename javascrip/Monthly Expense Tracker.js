let expenses = [5000, 1500, 3000, 2000, 1000];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let taxRate = 10;

total += total * taxRate / 100;

console.log("Original Total: ₹" + (total / 1.10).toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax Rate: " + taxRate + "%");
console.log("Final Amount After Tax: ₹" + total.toFixed(2));