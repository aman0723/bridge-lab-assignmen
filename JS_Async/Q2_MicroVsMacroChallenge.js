// Q2 - Task Scheduler: Micro vs Macro Challenge
// Scenario: Visualizing how the JavaScript Event Loop prioritizes tasks between Call Stack, Microtask Queue, and Macrotask Queue.

// 1. Initial Synchronous log
console.log("Start");

// 2. setTimeout callback (Macrotask / Task Queue)
setTimeout(() => {
    console.log("Timeout callback (Macrotask)");
}, 0);

// 3. Resolved Promise callback (Microtask / Job Queue)
Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});

// 4. Synchronous log in the middle
console.log("Synchronous Log: Processing main script tasks...");

// 5. Final Synchronous log
console.log("End");

/*
================================================================================
EXPLANATION: Why Microtasks Run Before Macrotasks
================================================================================

1. Call Stack (Synchronous Code):
   - JavaScript executes all synchronous code from top to bottom on the Call Stack first.
   - Therefore, "Start", "Synchronous Log...", and "End" execute immediately.

2. Microtask Queue (Promises, queueMicrotask, MutationObserver):
   - When a Promise resolves, its .then() callback is pushed into the Microtask Queue.
   - The Event Loop checks the Microtask Queue immediately after the Call Stack becomes empty,
     BEFORE checking the Macrotask (Callback) Queue.
   - All tasks in the Microtask Queue are drained completely before yielding to the next phase.

3. Macrotask Queue (setTimeout, setInterval, setImmediate, I/O):
   - The setTimeout callback is placed in the Macrotask Queue by the browser/timer Web API.
   - It only executes after the current synchronous script has finished AND all pending
     microtasks have completed.

Expected Output Order:
1. Start
2. Synchronous Log: Processing main script tasks...
3. End
4. Promise.then callback (Microtask)
5. Timeout callback (Macrotask)
================================================================================
*/
