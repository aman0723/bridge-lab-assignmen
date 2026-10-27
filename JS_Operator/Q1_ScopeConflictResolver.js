// Q1: Scope Conflict Resolver
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable
    let totalSalary;

    if (isPermanent) {
        totalSalary = salary + bonus;
    } else {
        totalSalary = salary;
    }

    console.log(`Employee (Permanent: ${isPermanent}) Total Salary: ₹${totalSalary}`);
    return totalSalary;
}

// Test cases
console.log("Global bonus:", bonus);
calculateSalary(true);
calculateSalary(false);

// Demonstrating global scope remains unaffected
console.log("Global bonus after function calls:", bonus);
