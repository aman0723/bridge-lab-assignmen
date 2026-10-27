"use strict";

const rawData = [
    '{"user":"Alex","age":"25"}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (
            !parsed ||
            typeof parsed !== "object" ||
            Array.isArray(parsed)
        ) {
            throw new Error("Invalid JSON object");
        }

        if (!("user" in parsed)) {
            throw new Error("Missing user key");
        }

        if (!("age" in parsed)) {
            throw new Error("Missing age key");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Age must be a valid number");
        }

        const cleaned = {
            user: String(parsed.user),
            age: age
        };

        cleanData.push(cleaned);
        console.log("Valid record:", cleaned);
    } catch (error) {
        errors.push({
            index: i,
            input: rawData[i],
            message: error.message
        });

        console.log(`Record ${i + 1} error: ${error.message}`);
    }
}

const under18 = cleanData.filter(person => person.age < 18);

console.log("\n--- JSON Audit Report ---");
console.log("Clean data:", cleanData);
console.log("Error records:", errors);
console.log("Under-18 users:", under18);
console.log("Total valid:", cleanData.length);
console.log("Total errors:", errors.length);