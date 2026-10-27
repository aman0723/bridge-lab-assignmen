// Q3: Math Utility Dashboard
let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x).toFixed(2);
let powerThree = Math.pow(x, 3).toFixed(2);
let randomNum = Math.floor(Math.random() * 41) + 10;

let summary = `
=== Math Utility Dashboard ===
Input Value (x): ${x}
1. Rounded Value: ${rounded}
2. Square Root: ${squareRoot}
3. Power (x^3): ${powerThree}
4. Random Number (10 to 50): ${randomNum}
==============================`;

console.log(summary);
