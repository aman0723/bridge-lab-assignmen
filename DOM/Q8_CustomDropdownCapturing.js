// ==========================================================================
// Question 8: Custom Dropdown Using Capturing Phase for Outside Click
// ==========================================================================

const dropdownWrapper = document.getElementById('dropdownWrapper');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedText = document.getElementById('selectedText');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const eventLog = document.getElementById('eventLog');

// Helper to log event phases
function logPhase(message, isCapturing = false) {
    const entry = document.createElement('div');
    entry.className = isCapturing ? 'log-entry capturing' : 'log-entry';
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    eventLog.prepend(entry);
}

// 1. Toggle Dropdown open/close
function toggleDropdown() {
    const isOpen = dropdownMenu.classList.contains('open');
    if (isOpen) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

function openDropdown() {
    dropdownMenu.classList.add('open');
    dropdownBtn.classList.add('active');
    logPhase('Dropdown menu opened.');
}

function closeDropdown() {
    dropdownMenu.classList.remove('open');
    dropdownBtn.classList.remove('active');
}

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

// 2. Select Option & Update Button Text
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.getAttribute('data-value');
        selectedText.textContent = value;

        // Highlight selected
        dropdownItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');

        closeDropdown();
        logPhase(`Selected option: "${value}"`);
    });
});

// 3. REQUIREMENT: Use CAPTURING PHASE for the closing mechanism
// Notice the 3rd argument is 'true' -> tells the browser to execute in CAPTURING phase!
document.addEventListener('click', (e) => {
    // If the click is outside the dropdown wrapper
    if (!dropdownWrapper.contains(e.target)) {
        if (dropdownMenu.classList.contains('open')) {
            closeDropdown();
            logPhase('⚡ CAPTURING PHASE: Outside click intercepted during down-propagation. Dropdown closed!', true);
        }
    }
}, true); // <--- TRUE triggers CAPTURING PHASE
