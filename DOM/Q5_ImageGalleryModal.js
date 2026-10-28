// ==========================================================================
// Question 5: Image Gallery with Modal Preview & event.stopPropagation()
// ==========================================================================

const galleryGrid = document.getElementById('galleryGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// 1. Function: Open Modal with enlarged image
function openModal(title, src) {
    modalImg.src = src;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalOverlay.classList.add('active');
}

// 2. Function: Close Modal
function closeModal() {
    modalOverlay.classList.remove('active');
    modalImg.src = '';
}

// 3. Click listener on gallery items to open modal
galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    const title = item.getAttribute('data-title');
    const src = item.getAttribute('data-src');
    openModal(title, src);
});

// 4. REQUIREMENT: Clicking outside modal -> closes the modal
modalOverlay.addEventListener('click', (e) => {
    closeModal();
});

// 5. REQUIREMENT: Use event.stopPropagation() so clicking inside modal does NOT close it!
modalContent.addEventListener('click', (e) => {
    // This stops the click event from bubbling up to the modalOverlay
    e.stopPropagation();
});

// 6. Close button click
modalCloseBtn.addEventListener('click', (e) => {
    closeModal();
});

// 7. Escape key listener to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
