// Q9: ES6 Class Inheritance vs Prototype-Based Inheritance
// Rewrite your Person -> Student inheritance example using ES6 classes with extends and super().
// Show that both class and prototype versions behave the same.

// =============================================================================
// PART 1: Prototype-Based Version (ES5)
// =============================================================================
function PersonProto(name) {
    this.name = name;
}
PersonProto.prototype.printName = function () {
    return `Person Name: ${this.name}`;
};

function StudentProto(name, branch) {
    PersonProto.call(this, name);
    this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
    return `Student Branch: ${this.branch}`;
};

// =============================================================================
// PART 2: ES6 Class Version with extends and super()
// =============================================================================
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        return `Person Name: ${this.name}`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        // Calling super constructor of PersonClass
        super(name);
        this.branch = branch;
    }

    printBranch() {
        return `Student Branch: ${this.branch}`;
    }
}

// =============================================================================
// PART 3: Comparing Behavior Between Prototype & Class Versions
// =============================================================================
const studentFromProto = new StudentProto("Aman Mudgal", "Computer Science");
const studentFromClass = new StudentClass("Aman Mudgal", "Computer Science");

console.log("=== ES5 Prototype Output ===");
console.log(studentFromProto.printName());
console.log(studentFromProto.printBranch());

console.log("\n=== ES6 Class Output ===");
console.log(studentFromClass.printName());
console.log(studentFromClass.printBranch());

console.log("\n=== Proof of Identical Behavior ===");
console.log("Names match      :", studentFromProto.printName() === studentFromClass.printName());     // true
console.log("Branches match   :", studentFromProto.printBranch() === studentFromClass.printBranch()); // true

console.log("\n=== Checking Prototype Chain Comparison ===");
console.log("studentFromClass instanceof StudentClass :", studentFromClass instanceof StudentClass); // true
console.log("studentFromClass instanceof PersonClass  :", studentFromClass instanceof PersonClass);  // true
console.log("studentFromProto instanceof StudentProto :", studentFromProto instanceof StudentProto); // true
console.log("studentFromProto instanceof PersonProto  :", studentFromProto instanceof PersonProto);  // true

/*
Explanation:
ES6 classes in JavaScript are syntactic sugar over existing prototype-based inheritance.
Under the hood, class declarations establish prototype delegations identical to Object.create(),
and super() delegates the constructor call identical to Person.call(this, ...).
*/
