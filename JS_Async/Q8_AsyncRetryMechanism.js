// Q8 - Order Processing Flow: Async Retry Mechanism
// Scenario: Resilient order placement system with automated retries on API failure.

// API call that fails 50% of the time
function submitOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() >= 0.5; // 50% chance of success
            if (isSuccess) {
                resolve({ orderId, status: "Confirmed", timestamp: new Date().toISOString() });
            } else {
                reject(new Error("Gateway Timeout / Payment Processor Busy"));
            }
        }, 800);
    });
}

// Async function to process order with up to 3 attempts
async function processOrder(orderId) {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Processing Order #${orderId} - Attempt ${attempt}...`);
            const result = await submitOrder(orderId);
            console.log(`Attempt ${attempt}: Success! Order placed successfully.`);
            return result; // Order completed, return early
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed (${error.message})`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed after 3 attempts.");
            }
        }
    }
}

// Driver code using try/catch for final graceful error handling
async function runOrderSystem() {
    console.log("=== E-Commerce Order Checkout Processing ===");

    try {
        const orderResult = await processOrder("ORD-98432");
        console.log("\nFinal Order Receipt:", orderResult);
    } catch (finalError) {
        console.error(`\nFinal Order Failure: ${finalError.message}`);
        console.log("Customer Notification: Please check your payment method and try again.");
    }
}

// Run the order system simulation
runOrderSystem();
