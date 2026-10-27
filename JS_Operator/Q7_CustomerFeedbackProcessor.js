// Q7: Customer Feedback Processor
function processFeedback(feedback) {
    console.log(`Feedback: "${feedback}"`);

    // Count words using split
    let words = feedback.trim().split(/\s+/);
    console.log("Word Count:", words.length);

    // Check for negative sentiment keywords
    let lowerFeedback = feedback.toLowerCase();
    let hasNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

    if (!hasNegativeWord) {
        console.log("Review Status: Positive Feedback");
    } else {
        console.log("Review Status: Needs Improvement");
    }
    console.log("----------------------------------------");
}

// Test Cases
processFeedback("Great product! Fast delivery and amazing sound quality!");
processFeedback("The packaging was poor and customer support was bad.");
processFeedback("Decent quality overall, happy with the purchase.");
