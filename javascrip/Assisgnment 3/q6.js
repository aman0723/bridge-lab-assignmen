
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        return this.getAnnualSalary() * (1 + percent / 100);
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Riya", "HR", 35000),
    new Employee(3, "Rahul", "Sales", 30000),
    new Employee(4, "Neha", "IT", 50000),
    new Employee(5, "Karan", "Finance", 45000)
];

employees.forEach(employee => {
    console.log(
        employee.name,
        "Annual Salary:", employee.getAnnualSalary(),
        "With 10% Bonus:", employee.applyBonus(10)
    );
});

const totalPayout = employees.reduce((total, employee) => {
    return total + employee.applyBonus(10);
}, 0);

console.log("Total Annual Payout:", totalPayout);
