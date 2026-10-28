// ==========================================================================
// Question 7: Detect Mouse Path & Coordinates Logger (400x400 Box)
// ==========================================================================

const trackBox = document.getElementById('trackBox');
const valClientX = document.getElementById('valClientX');
const valClientY = document.getElementById('valClientY');
const dotCounter = document.getElementById('dotCounter');
const clearDotsBtn = document.getElementById('clearDotsBtn');

let dotCount = 0;

// 1. REQUIREMENT: Track Mouse Move inside the box & show live clientX, clientY
trackBox.addEventListener('mousemove', (e) => {
    valClientX.textContent = `${e.clientX} px`;
    valClientY.textContent = `${e.clientY} px`;
});

// Reset display when mouse leaves the box
trackBox.addEventListener('mouseleave', () => {
    valClientX.textContent = 'Out of Box';
    valClientY.textContent = 'Out of Box';
});

// 2. REQUIREMENT: On double-click inside, drop a red dot at the click position
trackBox.addEventListener('dblclick', (e) => {
    // Get click position relative to the tracking box
    const rect = trackBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create the red dot element
    const redDot = document.createElement('div');
    redDot.className = 'red-dot';
    redDot.style.left = `${x}px`;
    redDot.style.top = `${y}px`;

    // Append red dot to the box
    trackBox.appendChild(redDot);
    dotCount++;
    dotCounter.textContent = `Red dots dropped: ${dotCount}`;
});

// 3. Clear All Red Dots
clearDotsBtn.addEventListener('click', () => {
    const dots = trackBox.querySelectorAll('.red-dot');
    dots.forEach(dot => dot.remove());
    dotCount = 0;
    dotCounter.textContent = 'Red dots dropped: 0';
});
