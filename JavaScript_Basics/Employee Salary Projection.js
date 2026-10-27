let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

console.log("Year\tAnnual Salary");
console.log("-------------------------");

console.log(`Current\t₹${salary.toFixed(2)}`);

for (let year = 1; year <= 5; year++) {
    salary = Math.round(salary * (1 + incrementRate / 100));
    console.log(`${year}\t₹${salary.toFixed(2)}`);
}