let total = 6500;
let discountRate;

if (total >= 10000) {
    discountRate = 25;
} else if (total >= 5000) {
    discountRate = 15;
} else if (total >= 2000) {
    discountRate = 5;
} else {
    discountRate = 0;
}

let discount = Math.round(total * discountRate / 100);
let finalPrice = total - discount;

console.log("Original Total: ₹" + total);
console.log("Discount: " + discountRate + "%");
console.log("Discount Amount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);