
function pipelineStep(name) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(name + " failed"));
            } else {
                resolve(name + " ready");
            }
        }, delay);
    });
}

async function runPipeline() {
    const steps = [
        "Order taken",
        "Order prepared",
        "Package ready",
        "Out for delivery",
        "Delivery complete"
    ];

    console.log("Start Pipeline");

    try {
        for (const step of steps) {
            const result = await pipelineStep(step);
            console.log("Step:", result);
        }

        console.log("Delivery complete!");
    } catch (error) {
        console.error("Pipeline failed:", error.message);
    }
}

runPipeline();
