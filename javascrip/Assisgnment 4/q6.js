
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image URL:", product.image);
            console.log("--------------------");
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchProducts();
