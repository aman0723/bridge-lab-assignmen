// Q8: Custom Array Prototype Method (myMap)
// Add a custom prototype method myMap() to all arrays that behaves like the built-in map() function.
// Example:
// [1,2,3].myMap(num => num * 2); // [2,4,6]

Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const transformedArray = [];

    // 'this' refers to the array on which myMap() was called
    for (let index = 0; index < this.length; index++) {
        // Handle sparse arrays (verify element exists at index)
        if (index in this) {
            const mappedValue = callback(this[index], index, this);
            transformedArray.push(mappedValue);
        }
    }

    return transformedArray;
};

// Demonstration & Tests
console.log("=== Testing Custom Array.prototype.myMap ===");

const numbers = [1, 2, 3];
const doubled = numbers.myMap((num) => num * 2);
console.log("Input Array :", numbers);
console.log("Doubled     :", doubled); // [2, 4, 6]

const names = ["aman", "deepak", "rohit"];
const uppercased = names.myMap((name) => name.toUpperCase());
console.log("Names       :", names);
console.log("Uppercased  :", uppercased); // ["AMAN", "DEEPAK", "ROHIT"]

const indexPlusVal = [10, 20, 30].myMap((val, idx) => `Item at index ${idx}: ${val}`);
console.log("Index + Val :", indexPlusVal);
