
function pipelineStep(step) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(step + " completed");
            resolve(step);
        }, 1000);
    });
}

async function runPipeline() {
    try {
        await pipelineStep("Design");
        await pipelineStep("Build");
        await pipelineStep("Test");
        await pipelineStep("Deploy");
        await pipelineStep("Celebrate");

        console.log("Pipeline completed!");
    } catch (error) {
        console.log("Pipeline failed:", error.message);
    }
}

runPipeline();
