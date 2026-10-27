// Q8: Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("Shopping Cart:", cart);

// Apply item-level category discounts
let itemDiscountedCart = cart.map(item => {
    let discountPercent = 0;
    if (item.category === "electronics") {
        discountPercent = 10;
    } else if (item.category === "fashion") {
        discountPercent = 5;
    }

    let discountAmount = (item.price * discountPercent) / 100;
    let finalItemPrice = item.price - discountAmount;

    return {
        ...item,
        discountPercent,
        finalItemPrice
    };
});

// Calculate subtotal using reduce
let subtotal = itemDiscountedCart.reduce((sum, item) => sum + item.finalItemPrice, 0);

// Check if total cart value > 50000 for extra 5% overall discount
let extraDiscount = 0;
let originalTotal = cart.reduce((sum, item) => sum + item.price, 0);

if (originalTotal > 50000) {
    extraDiscount = (subtotal * 5) / 100;
}

let finalPayable = subtotal - extraDiscount;

console.log("Original Total: ₹" + originalTotal);
console.log("Subtotal (after category discounts): ₹" + subtotal);
if (extraDiscount > 0) {
    console.log("Extra 5% Bulk Order Discount: ₹" + extraDiscount);
}
console.log("Final Payable Total: ₹" + finalPayable);
