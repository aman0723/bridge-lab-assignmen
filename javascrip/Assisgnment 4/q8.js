
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Order processed successfully");
            } else {
                reject(new Error("Order processing failed"));
            }
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log("Attempt " + attempt + ": Success!");
            console.log(result);
            return;
        } catch (error) {
            console.log("Attempt " + attempt + ": Failed");
        }
    }

    console.log("Order could not be processed.");
}

processOrder();
