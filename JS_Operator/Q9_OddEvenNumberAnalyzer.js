// Q9: Odd–Even Number Analyzer
let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let classification = "";

    if (num % 3 === 0 && num % 5 === 0) {
        classification = `${num}: FizzBuzz`;
    } else if (num % 2 === 0) {
        classification = `${num}: Even`;
    } else {
        classification = `${num}: Odd`;
    }

    results.push(classification);
}

console.log("Odd-Even & FizzBuzz Results (1 to 30):");
results.forEach(res => console.log(res));
