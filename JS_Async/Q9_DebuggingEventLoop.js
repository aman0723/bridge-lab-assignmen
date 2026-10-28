// Q9 - Debugging the Event Loop
// Scenario: Analyzing asynchronous execution flow and proving microtask priority over macrotasks.

/*
================================================================================
PREDICTED EXECUTION ORDER (Before Running):
1. "Script start"       -> Synchronous code executed immediately on Call Stack.
2. "Script end"         -> Synchronous code executed immediately on Call Stack.
3. "Promise callback"   -> Microtask queue has higher priority; processed right after Call Stack empties.
4. "Timeout callback"   -> Macrotask queue processed after all microtasks are exhausted.
================================================================================
*/

console.log("=== Event Loop Execution Trace ===");

// 1. Synchronous
console.log("Script start");

// 2. Macrotask (Timer Web API / Macrotask Queue)
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// 3. Microtask (Job Queue / Microtask Queue)
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// 4. Synchronous
console.log("Script end");

/*
================================================================================
ACTUAL EXECUTION RESULTS & ANALYSIS:
Output logged:
  Script start
  Script end
  Promise callback
  Timeout callback

WHY PROMISES (MICROTASKS) EXECUTE BEFORE SETTIMEOUT (MACROTASKS):

1. Call Stack Priority:
   JavaScript is single-threaded. The main thread executes the global execution context
   synchronously line-by-line until the Call Stack is completely clear.

2. Event Loop Tick Cycle:
   At the end of the current synchronous turn:
   - The Event Loop FIRST inspects the Microtask Queue (Promise reactions, queueMicrotask).
   - It executes EVERY single pending microtask in FIFO order until the Microtask Queue is empty.
   - ONLY THEN does the Event Loop move to the Macrotask Queue (setTimeout, setInterval, I/O)
     to pick the next available macrotask.

3. Performance and Consistency:
   Microtasks were specifically introduced to allow fast, atomic asynchronous responses
   without waiting for a full event loop turn or browser re-render cycle.
================================================================================
*/
