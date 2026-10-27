// Q4: Array Performance Analyzer
let scores = [78, 45, 92, 60, 35, 88, 54, 70];

console.log("Student Scores:", scores);

// Highest and Lowest
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Average Score using reduce
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = (totalScore / scores.length).toFixed(2);

// Passed Students (score >= 50) using filter
let passedStudents = scores.filter(score => score >= 50);

console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore);
console.log("Number of Students Passed (>= 50):", passedStudents.length);
