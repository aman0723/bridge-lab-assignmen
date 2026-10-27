javascript
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (const item of apiData) {
    try {
        const numberValue = Number(item);
        const booleanValue = Boolean(item);
        const stringValue = String(item);

        const isValidNumber =
            item !== null &&
            item !== undefined &&
            String(item).trim() !== "" &&
            Number.isFinite(numberValue);

        if (isValidNumber) {
            valid.push({
                original: item,
                number: numberValue,
                boolean: booleanValue,
                string: stringValue
            });
        } else {
            invalid.push(item);
        }

        console.log(
            `Original: ${stringValue}, Number: ${numberValue}, Boolean: ${booleanValue}`
        );
    } catch (error) {
        invalid.push(item);
        console.log("Conversion error:", error.message);
    }
}

console.log("\nValid numeric data:", valid);
console.log("Invalid data:", invalid);
