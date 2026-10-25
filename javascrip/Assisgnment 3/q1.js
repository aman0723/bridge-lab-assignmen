
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Phone", 20000, "Electronics")
];

products[0].applyDiscount(10);

products.forEach(product => {
    console.log(product.displayDetails());
});

console.log("Products above ₹1000:");

const filteredProducts = products.filter(product => product.price > 1000);

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});
