
function serverResponse(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(name + " failed"));
            } else {
                resolve(name + " responded in " + delay / 1000 + " seconds");
            }
        }, delay);
    });
}

Promise.all([
    serverResponse("Server A", 1000),
    serverResponse("Server B", 3000)
])
    .then(results => {
        console.log("Deployment completed for all servers:");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.log("Deployment failed:", error.message);
    });

Promise.race([
    serverResponse("Server A", 1000),
    serverResponse("Server B", 3000)
])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.log("Race failed:", error.message));
