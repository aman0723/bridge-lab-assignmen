
function fetchBug(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.3;

        if (success) {
            callback(null, "Bug data fetched successfully");
        } else {
            callback(new Error("API timeout"));
        }
    }, 1000);
}

function getBugs() {
    return new Promise((resolve, reject) => {
        fetchBug((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

getBugs()
    .then(data => console.log(data))
    .catch(error => console.error("Bug tracker error:", error.message));
