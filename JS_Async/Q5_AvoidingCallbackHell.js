// Q5 - Frontend Rush: Avoiding Callback Hell
// Scenario: Refactoring a 5-stage UI build pipeline from nested callback pyramid to clean async/await.

// =============================================================================
// PART 1: The "Callback Hell" Implementation (The Pyramid of Doom)
// =============================================================================

function stageDesignCallback(callback) {
    setTimeout(() => {
        console.log("1. Design phase completed.");
        callback();
    }, 1000);
}

function stageBuildCallback(callback) {
    setTimeout(() => {
        console.log("2. Build compiled successfully.");
        callback();
    }, 1000);
}

function stageTestCallback(callback) {
    setTimeout(() => {
        console.log("3. Unit & Integration tests passed.");
        callback();
    }, 1000);
}

function stageDeployCallback(callback) {
    setTimeout(() => {
        console.log("4. Production deployment live.");
        callback();
    }, 1000);
}

function stageCelebrateCallback() {
    setTimeout(() => {
        console.log("5. Celebrate! Launch party with the UI team! 🎉\n");
    }, 1000);
}

function runCallbackHell() {
    console.log("--- Starting Pipeline (Callback Hell Approach) ---");
    // Deeply nested pyramid of doom:
    stageDesignCallback(() => {
        stageBuildCallback(() => {
            stageTestCallback(() => {
                stageDeployCallback(() => {
                    stageCelebrateCallback();
                });
            });
        });
    });
}

// =============================================================================
// PART 2: Promise Helper for Modern Async/Await
// =============================================================================

function runStage(stageName, stepNumber, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stepNumber}. ${stageName}`);
            resolve();
        }, delay);
    });
}

// =============================================================================
// PART 3: Modern Clean Implementation with async/await
// =============================================================================

async function runModernPipeline() {
    console.log("\n--- Starting Pipeline (Modern async/await Approach) ---");
    try {
        await runStage("Design phase completed.", 1);
        await runStage("Build compiled successfully.", 2);
        await runStage("Unit & Integration tests passed.", 3);
        await runStage("Production deployment live.", 4);
        await runStage("Celebrate! Launch party with the UI team! 🎉", 5);
        console.log("Pipeline execution finished seamlessly!\n");
    } catch (error) {
        console.error("Pipeline encountered an error:", error);
    }
}

/*
================================================================================
WHY ASYNC/AWAIT IMPROVES READABILITY:
1. Linear Flow: Asynchronous code reads and behaves like traditional synchronous code,
   eliminating mental context switching.
2. No Nesting / Indentation Creep: Nested callbacks create rightward drifting code
   (Pyramid of Doom), which is difficult to maintain and debug.
3. Centralized Error Handling: Instead of passing err in every single callback parameter,
   we can wrap the entire sequential workflow in standard try/catch blocks.
4. Better Stack Traces: Errors thrown in async/await functions give clear, readable stack
   traces pointing directly to the failing await statement.
================================================================================
*/

// Execute demonstration
runCallbackHell();

// Run async/await version after callback hell completes (approx 5.5s later)
setTimeout(() => {
    runModernPipeline();
}, 5500);
