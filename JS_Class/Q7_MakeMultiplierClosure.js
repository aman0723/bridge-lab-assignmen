// Q7: Closures with makeMultiplier
// Write a function makeMultiplier(multiplier) that returns another function to multiply any number by that multiplier.
// Example:
// const triple = makeMultiplier(3);
// console.log(triple(5)); // 15
// Explain how closure works in this example.

function makeMultiplier(multiplier) {
    // The inner function closes over the 'multiplier' variable from its outer lexical scope
    return function (number) {
        return number * multiplier;
    };
}

// Creating multiplier instances
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

console.log("=== Testing makeMultiplier Closures ===");
console.log("triple(5)   ->", triple(5));     // 15
console.log("double(8)   ->", double(8));     // 16
console.log("tenTimes(4) ->", tenTimes(4));   // 40

/*
================================================================================
HOW CLOSURE WORKS IN THIS EXAMPLE:
================================================================================
1. Definition: A closure is the combination of a function bundled together with references 
   to its surrounding state (the lexical environment).

2. Execution Flow:
   - When makeMultiplier(3) is executed, a new execution context is created where the parameter 
     'multiplier' is set to 3.
   - It returns the inner anonymous function and makeMultiplier finishes execution, popping off the call stack.

3. Retained Lexical Scope:
   - Normally, local variables are destroyed after a function returns.
   - However, the returned inner function retains a permanent reference to 'multiplier' in its [[Scopes]] closure.
   - When triple(5) is invoked later, it accesses 'multiplier' (which is 3) from its closure and multiplies it with 'number' (5) to yield 15.
================================================================================
*/
