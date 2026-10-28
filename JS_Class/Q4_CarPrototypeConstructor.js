// Q4: Constructor Function and Prototype Method Sharing
// Create a constructor function Car(brand, model).
// Add a prototype method getDetails() that prints car brand and model.
// Create two car objects and call this method to show method sharing via prototype.

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding getDetails method to Car prototype
Car.prototype.getDetails = function () {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

// Creating two car objects
const car1 = new Car("Tata", "Harrier");
const car2 = new Car("Mahindra", "XUV700");

// Calling prototype method
car1.getDetails();
car2.getDetails();

// Demonstrating that both objects share the EXACT same function reference in memory
console.log("\nAre both instances sharing the exact same method reference in memory?");
console.log("car1.getDetails === car2.getDetails ->", car1.getDetails === car2.getDetails); // true
