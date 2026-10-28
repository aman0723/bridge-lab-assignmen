// ==========================================================================
// Question 2: Live Character Counter with Warning Behavior & preventDefault()
// ==========================================================================

const MAX_CHARS = 100;
const messageInput = document.getElementById('messageInput');
const counterBadge = document.getElementById('counterBadge');
const charCount = document.getElementById('charCount');
const resetBtn = document.getElementById('resetBtn');

// 1. Function: Update character counter and styles
function updateCounter() {
    const currentLength = messageInput.value.length;
    const remaining = MAX_CHARS - currentLength;

    charCount.textContent = Math.max(0, remaining);

    // Remove existing state classes
    counterBadge.classList.remove('normal', 'yellow', 'red');
    messageInput.classList.remove('warning', 'limit-reached');

    if (remaining === 0) {
        // Red at 0
        counterBadge.classList.add('red');
        messageInput.classList.add('limit-reached');
        counterBadge.innerHTML = `<span id="charCount">0</span> characters left (Limit Reached!)`;
    } else if (remaining <= 20) {
        // Yellow at <= 20
        counterBadge.classList.add('yellow');
        messageInput.classList.add('warning');
        counterBadge.innerHTML = `<span id="charCount">${remaining}</span> characters left (Warning!)`;
    } else {
        // Normal state
        counterBadge.classList.add('normal');
        counterBadge.innerHTML = `<span id="charCount">${remaining}</span> characters left`;
    }
}

// 2. Prevent further typing when 0 chars left using preventDefault()
messageInput.addEventListener('keydown', (e) => {
    const allowedKeys = [
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 
        'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End'
    ];

    // Allow user to use Ctrl/Cmd combinations (like Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+Z)
    if (e.ctrlKey || e.metaKey || allowedKeys.includes(e.key)) {
        return;
    }

    // If remaining is 0 or less, PREVENT DEFAULT TYPING
    if (messageInput.value.length >= MAX_CHARS) {
        e.preventDefault(); // STOP typing!
    }
});

// 3. Listen to input event for real-time calculation & handle pasted content
messageInput.addEventListener('input', () => {
    // If text exceeds 100 via paste, trim it to 100
    if (messageInput.value.length > MAX_CHARS) {
        messageInput.value = messageInput.value.substring(0, MAX_CHARS);
    }
    updateCounter();
});

// 4. Reset Button: Clears textarea and resets counter
resetBtn.addEventListener('click', () => {
    messageInput.value = '';
    messageInput.focus();
    updateCounter();
});

// Initial load
updateCounter();
