// Q2: String Manipulation Report
let rawProductName = "  wireless headphones PRO  ";

// Trim extra spaces and convert to lowercase
let trimmed = rawProductName.trim().toLowerCase();

// Capitalize the first letter of each word
let capitalized = trimmed
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
let cleanedTitle = capitalized.replace("Pro", "Pro Edition");

console.log("Original Product Name:", `"${rawProductName}"`);
console.log("Cleaned Title:", cleanedTitle);
console.log("Cleaned Title Length:", cleanedTitle.length);
