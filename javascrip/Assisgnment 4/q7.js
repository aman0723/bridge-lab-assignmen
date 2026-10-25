
function loadProfile() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Profile Loaded"), 1000)
    );
}

function loadPosts() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Posts Loaded"), 1500)
    );
}

function loadMessages() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Messages Loaded"), 2000)
    );
}

async function loadDashboard() {
    const start = Date.now();

    const tasks = [
        loadProfile(),
        loadPosts(),
        loadMessages()
    ];

    // Randomly reject one Promise
    if (Math.random() < 0.5) {
        const index = Math.floor(Math.random() * tasks.length);

        tasks[index] = Promise.reject(
            new Error("One module failed")
        );
    }

    const results = await Promise.allSettled(tasks);

    results.forEach((result, index) => {
        const names = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(names[index], "success:", result.value);
        } else {
            console.log(names[index], "failed:", result.reason.message);
        }
    });

    console.log("Total time:", (Date.now() - start) / 1000, "seconds");
}

loadDashboard();
