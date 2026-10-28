// Q6: Three-Level Prototype Chain (Person -> Faculty -> Professor)
// Create a prototype chain using constructor functions:
// Person -> Faculty -> Professor
// Each should have its own property and method.
// Show how a Professor object can access all methods up the chain.

// 1. Level 1: Person
function Person(name) {
    this.name = name;
}

Person.prototype.introducePerson = function () {
    console.log(`[Level 1 - Person]: Hi, my name is ${this.name}.`);
};

// 2. Level 2: Faculty (inherits Person)
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFacultyInfo = function () {
    console.log(`[Level 2 - Faculty]: Department of ${this.department}.`);
};

// 3. Level 3: Professor (inherits Faculty)
function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.displayProfessorDetails = function () {
    console.log(`[Level 3 - Professor]: Specialization / Research Area: ${this.researchArea}.`);
};

// Creating a Professor instance
const prof = new Professor("Dr. R. K. Sharma", "Computer Science & Engineering", "Artificial Intelligence & Distributed Systems");

console.log("=== Accessing Methods Up the Prototype Chain ===");
// Accessing Level 1 method
prof.introducePerson();

// Accessing Level 2 method
prof.showFacultyInfo();

// Accessing Level 3 method
prof.displayProfessorDetails();

console.log("\n=== Checking Prototype Chain Linkages ===");
console.log("prof instanceof Professor:", prof instanceof Professor); // true
console.log("prof instanceof Faculty  :", prof instanceof Faculty);   // true
console.log("prof instanceof Person   :", prof instanceof Person);    // true
console.log("prof instanceof Object   :", prof instanceof Object);    // true
