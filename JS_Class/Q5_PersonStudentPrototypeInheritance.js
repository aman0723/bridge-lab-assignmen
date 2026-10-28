// Q5: Prototype Inheritance (Person -> Student)
// Create a Person constructor with property name.
// Then create a Student constructor that inherits from Person and adds property branch.
// Add methods to print both name and branch using prototypes.
// Demonstrate the prototype chain working.

// 1. Parent Constructor Function
function Person(name) {
    this.name = name;
}

// Method on Person prototype
Person.prototype.printName = function () {
    console.log(`Person Name: ${this.name}`);
};

// 2. Child Constructor Function
function Student(name, branch) {
    // Call parent constructor with current context
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype using Object.create
Student.prototype = Object.create(Person.prototype);

// Reset constructor reference back to Student
Student.prototype.constructor = Student;

// Method on Student prototype
Student.prototype.printBranch = function () {
    console.log(`Student Branch: ${this.branch}`);
};

// Demonstrating Prototype Chain Working
const student1 = new Student("Aman Mudgal", "Computer Science");

console.log("=== Prototype Chain Demonstration ===");
student1.printName();   // Inherited from Person.prototype
student1.printBranch(); // Defined on Student.prototype

console.log("\nPrototype Chain Verifications:");
console.log("student1 instanceof Student :", student1 instanceof Student); // true
console.log("student1 instanceof Person  :", student1 instanceof Person);  // true
console.log("student1 instanceof Object  :", student1 instanceof Object);  // true
