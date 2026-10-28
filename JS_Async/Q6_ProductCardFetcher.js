// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Scenario: Fetching and dynamically displaying mock product data from the Fake Store API.

const API_URL = "https://fakestoreapi.com/products";

// Async function to fetch and display products
async function fetchProducts() {
    console.log("=== Fetching E-Commerce Products from Fake Store API ===");

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const products = await response.json();

        console.log(`\nSuccessfully retrieved ${products.length} products:\n`);

        // Display products in formatted console output
        products.slice(0, 5).forEach((product, index) => {
            console.log(`--- Product #${index + 1} ---`);
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price.toFixed(2)}`);
            console.log(`Image: ${product.image}\n`);
        });

        // Bonus: Dynamic HTML Card Generation (Works if running in browser environment)
        if (typeof document !== "undefined") {
            const container = document.getElementById("product-container") || document.body;

            products.forEach((product) => {
                const card = document.createElement("div");
                card.className = "card product-card shadow-sm m-2 p-3";
                card.style.width = "18rem";

                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.title;
                img.className = "card-img-top";
                img.style.height = "200px";
                img.style.objectFit = "contain";

                const title = document.createElement("h5");
                title.className = "card-title mt-2";
                title.textContent = product.title;

                const price = document.createElement("p");
                price.className = "card-text fw-bold text-success";
                price.textContent = `$${product.price.toFixed(2)}`;

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);
                container.appendChild(card);
            });
            console.log("Bonus: Rendered product cards into HTML DOM.");
        }

    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error("Technical details:", error.message);
    }
}

// Execute the product fetcher
fetchProducts();
