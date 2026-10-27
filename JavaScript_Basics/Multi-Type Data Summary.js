let userName = "Harsh";
let age = 21;
let isStudent = true;
let subjects = ["JavaScript", "Python", "SQL"];
let student = { name: "Harsh", age: 21 };
let address = null;
let result;

let data = [
    { label: "Name", value: userName },
    { label: "Age", value: age },
    { label: "Student", value: isStudent },
    { label: "Subjects", value: subjects },
    { label: "Student Object", value: student },
    { label: "Address", value: address },
    { label: "Result", value: result }
];

let report = data.map(item => ({
    Label: item.label,
    Value: String(item.value),
    Type: item.value === null
        ? "null"
        : Array.isArray(item.value)
        ? "array"
        : typeof item.value
}));

console.table(report);