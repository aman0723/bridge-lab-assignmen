// Q6: Event-Based Counter Simulation
let count = 0;

function createCounter() {
    function increment() {
        count++;
        function logUpdate() {
            console.log(`[Click: Increment] Current Count = ${count}`);
        }
        logUpdate();
    }

    function decrement() {
        count--;
        function logUpdate() {
            console.log(`[Click: Decrement] Current Count = ${count}`);
        }
        logUpdate();
    }

    return { increment, decrement };
}

const counter = createCounter();

// Simulating click events
console.log("Initial Count:", count);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.increment();
