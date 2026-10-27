"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (
            !employee.name ||
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid employee data");
        }

        const bonus = salary * (years > 3 ? 0.1 : 0.05);

        console.log(
            `Employee: ${employee.name}, Salary: ₹${salary}, ` +
            `Years: ${years}, Bonus: ₹${bonus}`
        );
    }
} catch (error) {
    console.error("Error:", error.message);
}