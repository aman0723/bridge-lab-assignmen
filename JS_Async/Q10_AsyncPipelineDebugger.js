// Q10 - The Final Delivery: Async Pipeline Debugger
// Scenario: Building a complete 5-stage asynchronous food delivery simulation app.

// Helper to simulate asynchronous pipeline steps with random delay (1-2s) and failure chance
function createPipelineStep(stepName, stepLog, failureRate = 0.1) {
    return function() {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2 seconds

            setTimeout(() => {
                const hasFailed = Math.random() < failureRate;
                if (hasFailed) {
                    reject(new Error(`Failed during stage: ${stepName}`));
                } else {
                    console.log(stepLog);
                    resolve(stepName);
                }
            }, delay);
        });
    };
}

// 5 Asynchronous Delivery Stages
const takeOrder = createPipelineStep("takeOrder", "Step 1: Order taken", 0.05);
const prepare   = createPipelineStep("prepare",   "Step 2: Food prepared", 0.05);
const pack      = createPipelineStep("pack",      "Step 3: Package ready", 0.05);
const dispatch  = createPipelineStep("dispatch",  "Step 4: Out for delivery", 0.05);
const deliver   = createPipelineStep("deliver",   "Delivery completed!", 0.05);

// Async Pipeline orchestrator using async/await and try/catch
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        /*
         * EVENT LOOP & ASYNC BEHAVIOR CONTROL FLOW:
         * 1. When `await` is reached, the execution of `runPipeline` is temporarily suspended.
         * 2. The enclosing function returns a pending Promise to the caller, freeing the Call Stack.
         * 3. The asynchronous timer for the step runs in the Web API environment.
         * 4. When resolved, the continuation is scheduled onto the Microtask Queue.
         * 5. The Event Loop resumes `runPipeline` precisely where it paused, proceeding to the next step.
         */
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();

        console.log("\n-> Order successfully delivered to customer's doorstep! 🍕");
    } catch (error) {
        console.error(`\nPipeline failed! Reason: ${error.message}`);
    }
}

// Execute the food delivery pipeline simulation
runPipeline();
