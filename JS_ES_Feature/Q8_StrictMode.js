"use strict";

function demo(a, b) {
    let total = 10;
    console.log("Total:", total);

    // Delete a variable declared with let is not allowed.
    // delete total; // SyntaxError in strict mode
}

demo(5, 10);