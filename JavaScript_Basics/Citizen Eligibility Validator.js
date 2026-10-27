let age = 21;
let isCitizen = true;

if (isCitizen && age >= 18) {
    console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
} else if (isCitizen && age < 18) {
    console.log("Not eligible yet.");
} else {
    console.log("Not eligible because citizenship is required.");
}