// Q1 - The Startup Morning: Async Coffee Maker
// Scenario: Automating the morning coffee preparation for the development team.

// Step 1: Boiling water (resolves in 1-2 seconds, random failure chance)
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Boiling water started...");
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2 seconds

        setTimeout(() => {
            const hasError = Math.random() < 0.15; // 15% chance of kettle issue
            if (hasError) {
                reject("Error: Water heater tripped! Failed to boil water.");
            } else {
                console.log("-> Water boiled successfully!");
                resolve("Boiled Water");
            }
        }, delay);
    });
}

// Step 2: Brewing coffee
function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        console.log(`Step 2: Brewing fresh coffee using ${water}...`);
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            const hasError = Math.random() < 0.15;
            if (hasError) {
                reject("Error: Coffee beans grinder jammed! Brewing failed.");
            } else {
                console.log("-> Coffee brewed rich and dark!");
                resolve("Brewed Coffee");
            }
        }, delay);
    });
}

// Step 3: Pouring into cup
function pourCoffee(coffee) {
    return new Promise((resolve, reject) => {
        console.log(`Step 3: Pouring ${coffee} into mugs...`);
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            const hasError = Math.random() < 0.15;
            if (hasError) {
                reject("Error: Mug slipped and spilled! Pouring failed.");
            } else {
                console.log("-> Coffee poured neatly into cups.");
                resolve("Ready Cup");
            }
        }, delay);
    });
}

// Executing the process using Promise chaining (.then() and .catch())
console.log("=== Morning Coffee Maker Machine Started ===");

boilWater()
    .then((waterResult) => {
        return brewCoffee(waterResult);
    })
    .then((coffeeResult) => {
        return pourCoffee(coffeeResult);
    })
    .then(() => {
        console.log("\nCoffee ready for the team! Have a productive day ahead!");
    })
    .catch((error) => {
        console.error("\nCoffee preparation stopped:", error);
    });
