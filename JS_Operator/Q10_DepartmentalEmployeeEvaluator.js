// Q10: Departmental Employee Evaluator
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("Departmental Employee Evaluation Report:");
console.log("-----------------------------------------");

for (let i = 0; i < departments.length; i++) {
    let deptName = departments[i][0];
    let score = departments[i][1];
    let performance = "";

    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(`Department: ${deptName.padEnd(8)} | Score: ${score} | Rating: ${performance}`);
}
