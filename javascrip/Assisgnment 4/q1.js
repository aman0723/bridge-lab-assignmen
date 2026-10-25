
function prepareCoffee(step, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error(step + " failed!"));
            } else {
                console.log(step + " ready for the team!");
                resolve(step);
            }
        }, delay);
    });
}

prepareCoffee("Boiling water", 1000)
    .then(() => prepareCoffee("Brewing coffee", 1500))
    .then(() => prepareCoffee("Pouring coffee", 1000))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error:", error.message));
