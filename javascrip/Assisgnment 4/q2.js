
console.log("Start");

setTimeout(() => {
    console.log("Macro task");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("End");
