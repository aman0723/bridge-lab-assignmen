// Q7 - The Lazy Loader: Promise Combinator Practice
// Scenario: Managing dashboard section loads and tracking success/failure using Promise.allSettled().

// Module 1: Load Profile (takes 2000ms)
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.25) {
                reject("Profile Module Error: Timeout fetching user credentials");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

// Module 2: Load Posts (takes 1500ms)
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.25) {
                reject("Posts Module Error: Feed service unavailable");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

// Module 3: Load Messages (takes 1000ms, frequently fails or randomly rejected)
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly reject to practice failure handling
            if (Math.random() < 0.5) {
                reject("Messages Failed: Connection closed unexpectedly");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    console.log("=== Lazy Loader: Loading Dashboard Sections ===");
    console.log("Dispatching async requests for Profile, Posts, and Messages...\n");

    const startTime = Date.now();

    // Use Promise.allSettled() so all promises finish regardless of individual rejection
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const endTime = Date.now();
    const totalTimeTaken = endTime - startTime;

    console.log("--- Dashboard Section Results ---");
    const moduleNames = ["User Profile", "Feed Posts", "Direct Messages"];

    results.forEach((result, index) => {
        const name = moduleNames[index];
        if (result.status === "fulfilled") {
            console.log(`[SUCCESS] ${name}: ${result.value}`);
        } else {
            console.log(`[FAILED]  ${name}: ${result.reason}`);
        }
    });

    console.log(`\nTotal time elapsed: ${totalTimeTaken}ms (${(totalTimeTaken / 1000).toFixed(2)} seconds)`);
}

// Execute dashboard loader
loadDashboard();
