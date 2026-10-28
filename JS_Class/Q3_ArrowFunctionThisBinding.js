// Q3: Arrow Function vs Regular Function 'this' Binding
// Create an object user with:
// - a property name
// - a method showName written as an arrow function.
// Log the output and explain why this.name is undefined. Then fix it by using a normal function.

// 1. Using Arrow Function (Problematic)
const userWithArrow = {
    name: "Aman Mudgal",
    showName: () => {
        console.log("Using Arrow Function: Name is", this.name);
    }
};

userWithArrow.showName();

/*
Explanation why this.name is undefined in Arrow Function:
- Arrow functions do not bind their own 'this'.
- Instead, they capture the 'this' value of the enclosing lexical scope at the time they are defined.
- In this object literal, the enclosing scope is the global/module scope (not the object userWithArrow).
- In Node.js or browser window, the global scope does not have a 'name' property on 'this',
  so this.name evaluates to undefined.
*/

// 2. Fixed using Regular Function (Solution)
const userWithNormalFunction = {
    name: "Aman Mudgal",
    showName: function () {
        console.log("Using Regular Function: Name is", this.name);
    }
};

/*
Explanation why Regular Function works:
- Regular functions define their 'this' dynamically based on how they are called.
- When called as userWithNormalFunction.showName(), 'this' points directly to the calling object (userWithNormalFunction).
- Therefore, this.name correctly accesses "Aman Mudgal".
*/

userWithNormalFunction.showName();
