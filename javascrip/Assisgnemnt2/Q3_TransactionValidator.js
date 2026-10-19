"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null || transaction === undefined) {
            throw new Error("Null transaction entry");
        }

        if (transaction.id === undefined || transaction.id === null) {
            throw new Error("Missing transaction ID");
        }

        if (
            transaction.amount === undefined ||
            transaction.amount === null
        ) {
            throw new Error("Missing transaction amount");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative transaction amount");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalid.push({
            transaction,
            error: error.message
        });

        console.log("Invalid transaction:", error.message);
    }
}

console.log("\n--- Final Report ---");
console.log("Successful transactions:", valid.length);
console.log("Failed transactions:", invalid.length);
console.log("Valid data:", valid);
console.log("Invalid data:", invalid);

// Debugging: set a breakpoint inside the loop
// and inspect transaction, valid, and invalid.