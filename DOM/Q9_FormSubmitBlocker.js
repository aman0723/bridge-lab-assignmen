// ==========================================================================
// Question 9: Form Submit Blocker with preventDefault() and Live Errors
// ==========================================================================

const userForm = document.getElementById('userForm');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successBanner = document.getElementById('successBanner');

// 1. Validation Helper Functions
function isNameValid() {
    return userName.value.trim().length >= 2;
}

function isEmailValid() {
    const val = userEmail.value.trim();
    return val.length > 0 && val.includes('@');
}

function isPasswordValid() {
    return userPassword.value.length >= 6;
}

// 2. REQUIREMENT: On correcting input -> errors disappear automatically
userName.addEventListener('input', () => {
    if (isNameValid()) {
        userName.classList.remove('is-invalid');
        nameError.classList.remove('visible');
    }
});

userEmail.addEventListener('input', () => {
    if (isEmailValid()) {
        userEmail.classList.remove('is-invalid');
        emailError.classList.remove('visible');
    }
});

userPassword.addEventListener('input', () => {
    if (isPasswordValid()) {
        userPassword.classList.remove('is-invalid');
        passwordError.classList.remove('visible');
    }
});

// 3. Form Submit Handler with preventDefault()
userForm.addEventListener('submit', (e) => {
    // REQUIREMENT: Always stop standard page reload form submission
    e.preventDefault();

    let hasErrors = false;
    successBanner.classList.remove('visible');

    // Check Name
    if (!isNameValid()) {
        userName.classList.add('is-invalid');
        nameError.classList.add('visible');
        hasErrors = true;
    } else {
        userName.classList.remove('is-invalid');
        nameError.classList.remove('visible');
    }

    // Check Email (must contain @)
    if (!isEmailValid()) {
        userEmail.classList.add('is-invalid');
        emailError.classList.add('visible');
        hasErrors = true;
    } else {
        userEmail.classList.remove('is-invalid');
        emailError.classList.remove('visible');
    }

    // Check Password (min 6 chars)
    if (!isPasswordValid()) {
        userPassword.classList.add('is-invalid');
        passwordError.classList.add('visible');
        hasErrors = true;
    } else {
        userPassword.classList.remove('is-invalid');
        passwordError.classList.remove('visible');
    }

    // If there are errors, STOP!
    if (hasErrors) {
        return;
    }

    // REQUIREMENT: If valid -> Show final "Form Submitted Successfully" message
    successBanner.classList.add('visible');
    userForm.reset();

    // Hide success banner after 4 seconds
    setTimeout(() => {
        successBanner.classList.remove('visible');
    }, 4500);
});
