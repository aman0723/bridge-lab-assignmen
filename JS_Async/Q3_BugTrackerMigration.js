// Q3 - Bug Tracker: Callback to Promise Migration
// Scenario: Modernizing callback-based bug tracking to clean Promise architecture.

// Original Callback-based implementation (Legacy)
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Modern Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bug reports from tracking server...");

        setTimeout(() => {
            // Simulate random API failure using a boolean
            const apiFailure = Math.random() < 0.2; // 20% random failure rate

            if (apiFailure) {
                reject("API Error: Unable to fetch bug records (500 Internal Server Error)");
            } else {
                const bugReports = [
                    { id: 101, title: "UI glitch", severity: "Low", status: "Open" },
                    { id: 102, title: "API timeout", severity: "High", status: "In Progress" },
                    { id: 103, title: "Login failure", severity: "Critical", status: "Resolved" }
                ];
                resolve(bugReports);
            }
        }, 1000);
    });
}

// Consuming getBugs() with console.table() and .catch() error handling
console.log("=== Bug Tracker Migration Test ===");

getBugs()
    .then((bugs) => {
        console.log("\nBug records retrieved successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error("\nFailed to load bug reports:", error);
    });
