"use strict";

function outer() {
    console.log("Outer before declaration:", count);

    var count = 5;

    function inner() {
        console.log("Inner before declaration:", count);

        var count = 10;

        console.log("Inner after declaration:", count);
    }

    inner();

    console.log("Outer after inner:", count);
}

outer();