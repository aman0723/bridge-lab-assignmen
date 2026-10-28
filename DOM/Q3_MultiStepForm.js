// ==========================================================================
// Question 3: Multi-Step Form with Next/Back & Step Validation
// ==========================================================================

// Inputs
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

// Errors
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Panels
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const summaryPanel = document.getElementById('summaryPanel');

// Circles & Progress
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const progressBar = document.getElementById('progressBar');

// Buttons
const nextBtn1 = document.getElementById('nextBtn1');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const prevBtn3 = document.getElementById('prevBtn3');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');

// Summary elements
const summaryName = document.getElementById('summaryName');
const summaryEmail = document.getElementById('summaryEmail');
const summaryPassword = document.getElementById('summaryPassword');

// Form Data Store
const formData = {
    name: '',
    email: '',
    password: ''
};

// 1. Validation Logic
function validateName() {
    const val = nameInput.value.trim();
    if (!val || val.length < 3) {
        nameInput.classList.add('is-invalid');
        nameError.classList.add('visible');
        return false;
    }
    nameInput.classList.remove('is-invalid');
    nameError.classList.remove('visible');
    formData.name = val;
    return true;
}

function validateEmail() {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val || !emailRegex.test(val)) {
        emailInput.classList.add('is-invalid');
        emailError.classList.add('visible');
        return false;
    }
    emailInput.classList.remove('is-invalid');
    emailError.classList.remove('visible');
    formData.email = val;
    return true;
}

function validatePassword() {
    const val = passwordInput.value;
    if (!val || val.length < 6) {
        passwordInput.classList.add('is-invalid');
        passwordError.classList.add('visible');
        return false;
    }
    passwordInput.classList.remove('is-invalid');
    passwordError.classList.remove('visible');
    formData.password = val;
    return true;
}

// Live error clearance on input
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length >= 3) {
        nameInput.classList.remove('is-invalid');
        nameError.classList.remove('visible');
    }
});
emailInput.addEventListener('input', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailInput.classList.remove('is-invalid');
        emailError.classList.remove('visible');
    }
});
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 6) {
        passwordInput.classList.remove('is-invalid');
        passwordError.classList.remove('visible');
    }
});

// 2. Navigation Step Handlers
// Step 1 -> Step 2
nextBtn1.addEventListener('click', () => {
    if (validateName()) {
        step1.classList.remove('active');
        step2.classList.add('active');

        circle1.classList.remove('active');
        circle1.classList.add('completed');
        circle2.classList.add('active');
        progressBar.style.width = '50%';
        emailInput.focus();
    }
});

// Step 2 -> Step 1 (Back)
prevBtn2.addEventListener('click', () => {
    step2.classList.remove('active');
    step1.classList.add('active');

    circle2.classList.remove('active');
    circle1.classList.remove('completed');
    circle1.classList.add('active');
    progressBar.style.width = '0%';
});

// Step 2 -> Step 3
nextBtn2.addEventListener('click', () => {
    if (validateEmail()) {
        step2.classList.remove('active');
        step3.classList.add('active');

        circle2.classList.remove('active');
        circle2.classList.add('completed');
        circle3.classList.add('active');
        progressBar.style.width = '100%';
        passwordInput.focus();
    }
});

// Step 3 -> Step 2 (Back)
prevBtn3.addEventListener('click', () => {
    step3.classList.remove('active');
    step2.classList.add('active');

    circle3.classList.remove('active');
    circle2.classList.remove('completed');
    circle2.classList.add('active');
    progressBar.style.width = '50%';
});

// Step 3 Submit -> Summary View
submitBtn.addEventListener('click', () => {
    if (validatePassword()) {
        step3.classList.remove('active');
        summaryPanel.classList.add('active');

        circle3.classList.remove('active');
        circle3.classList.add('completed');

        // Populate Summary
        summaryName.textContent = formData.name;
        summaryEmail.textContent = formData.email;
        // Mask password
        summaryPassword.textContent = '•'.repeat(formData.password.length) + ` (${formData.password.length} chars)`;
    }
});

// Restart Form
restartBtn.addEventListener('click', () => {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    summaryPanel.classList.remove('active');
    step1.classList.add('active');

    circle1.className = 'step-circle active';
    circle2.className = 'step-circle';
    circle3.className = 'step-circle';
    progressBar.style.width = '0%';

    nameInput.focus();
});
