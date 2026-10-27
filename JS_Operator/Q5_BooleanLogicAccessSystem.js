// Q5: Boolean Logic Access System
function checkHomeSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    if (isSecure) {
        console.log("Status: Secure (Access Granted)");
    } else {
        console.log("Status: Unsafe (Access Denied)");
    }
}

// Test cases
console.log("Test Case 1 (All conditions met):");
checkHomeSecurity(true, true, true, true);

console.log("Test Case 2 (Alarm off):");
checkHomeSecurity(true, true, false, true);

console.log("Test Case 3 (Window open):");
checkHomeSecurity(true, false, true, true);

console.log("Test Case 4 (Owner outside):");
checkHomeSecurity(true, true, true, false);
