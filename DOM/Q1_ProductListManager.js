// ==========================================================================
// Question 1: Dynamic Product List Manager (Event Delegation & Inline Edit)
// ==========================================================================

const productList = document.getElementById('productList');
const newProductInput = document.getElementById('newProductInput');
const addProductBtn = document.getElementById('addProductBtn');

// 1. Function: Add New Product
function addProduct() {
    const text = newProductInput.value.trim();
    if (!text) {
        alert('Please enter a product name!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'product-item';
    li.innerHTML = `
        <span class="product-name">${escapeHTML(text)}</span>
        <div class="actions">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>
    `;

    productList.appendChild(li);
    newProductInput.value = '';
    newProductInput.focus();
}

addProductBtn.addEventListener('click', addProduct);
newProductInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addProduct();
});

// 2. EVENT DELEGATION on Parent <ul>: Handle Edit and Delete
productList.addEventListener('click', (e) => {
    const target = e.target;
    const listItem = target.closest('.product-item');
    if (!listItem) return;

    // Delete Action
    if (target.classList.contains('btn-delete')) {
        listItem.remove();
        checkEmptyList();
    }

    // Edit Action (Inline Editing)
    if (target.classList.contains('btn-edit')) {
        startInlineEdit(listItem);
    }
});

// 3. Function: Start Inline Edit
function startInlineEdit(listItem) {
    // Check if already editing
    if (listItem.querySelector('.inline-edit-input')) return;

    // First auto-save any other open edit item
    saveAnyActiveEdit();

    const nameSpan = listItem.querySelector('.product-name');
    const currentName = nameSpan.textContent;

    // Create inline input
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inline-edit-input';
    input.value = currentName;

    // Hide span and insert input
    nameSpan.style.display = 'none';
    listItem.insertBefore(input, listItem.querySelector('.actions'));
    input.focus();
    input.select();

    // Save on Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveInlineEdit(listItem);
        }
    });
}

// 4. Function: Save Inline Edit
function saveInlineEdit(listItem) {
    const input = listItem.querySelector('.inline-edit-input');
    const nameSpan = listItem.querySelector('.product-name');
    if (!input || !nameSpan) return;

    const updatedText = input.value.trim() || nameSpan.textContent;
    nameSpan.textContent = updatedText;
    nameSpan.style.display = '';
    input.remove();
}

// 5. Function: Save any active edit
function saveAnyActiveEdit() {
    const activeInput = document.querySelector('.inline-edit-input');
    if (activeInput) {
        const item = activeInput.closest('.product-item');
        if (item) saveInlineEdit(item);
    }
}

// 6. AUTO-SAVE ON CLICK OUTSIDE
document.addEventListener('click', (e) => {
    const activeInput = document.querySelector('.inline-edit-input');
    if (!activeInput) return;

    const listItem = activeInput.closest('.product-item');
    // If click is outside the item being edited AND not clicking the Edit button
    if (listItem && !listItem.contains(e.target)) {
        saveInlineEdit(listItem);
    }
});

// Helper: Check empty list
function checkEmptyList() {
    if (productList.children.length === 0) {
        productList.innerHTML = '<li class="empty-msg">No products in list. Add some above!</li>';
    }
}

// Helper: Escape HTML
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
