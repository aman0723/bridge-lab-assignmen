// Q4 - DevOps Delay: Async Timeout Race
// Scenario: Tracking server deployments and race response between two cloud regions.

// Server A deployment simulation (resolves in 2 seconds)
function deployServerA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ server: "Server A (US-East)", responseTime: "2s", status: "Deployed" });
        }, 2000);
    });
}

// Server B deployment simulation (resolves in 3 seconds)
function deployServerB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ server: "Server B (EU-West)", responseTime: "3s", status: "Deployed" });
        }, 3000);
    });
}

console.log("=== DevOps Deployment Initiated ===");
console.log("Waiting for servers to respond...\n");

// 1. Using Promise.race() to detect the first responder
Promise.race([deployServerA(), deployServerB()])
    .then((fastest) => {
        console.log(`Fastest response: ${fastest.server} responded first in ${fastest.responseTime}!`);
    })
    .catch((err) => console.error("Error in race:", err));

// 2. Using Promise.all() to wait for all servers to finish deployment
Promise.all([deployServerA(), deployServerB()])
    .then((results) => {
        console.log("\nDeployment completed for all servers.");
        console.log("Server details:", results);
    })
    .catch((err) => console.error("Deployment failed on one or more servers:", err));
