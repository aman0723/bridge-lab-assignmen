// ==========================================================================
// Question 4: Theme Switcher Using setAttribute() Manipulation
// ==========================================================================

const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');
const btnBlue = document.getElementById('btnBlue');

const monitorClass = document.getElementById('monitorClass');
const monitorDataTheme = document.getElementById('monitorDataTheme');

const allButtons = [btnLight, btnDark, btnBlue];

// Function: Apply Theme using setAttribute()
function applyTheme(themeName) {
    const className = `theme-${themeName}`;

    // 1. Requirement: Clicking a button adds a class to <body> using setAttribute()
    document.body.setAttribute('class', className);

    // 2. Requirement: Save current theme in a custom attribute data-theme="..." using setAttribute()
    document.body.setAttribute('data-theme', themeName);

    // 3. Update button active states
    allButtons.forEach(btn => btn.classList.remove('active'));
    if (themeName === 'light') btnLight.classList.add('active');
    if (themeName === 'dark')  btnDark.classList.add('active');
    if (themeName === 'blue')  btnBlue.classList.add('active');

    // 4. Update the live DOM attribute inspector
    monitorClass.textContent = document.body.getAttribute('class');
    monitorDataTheme.textContent = document.body.getAttribute('data-theme');
}

// Event Listeners for theme buttons
btnLight.addEventListener('click', () => applyTheme('light'));
btnDark.addEventListener('click', () => applyTheme('dark'));
btnBlue.addEventListener('click', () => applyTheme('blue'));

// Initialize with light theme
applyTheme('light');
