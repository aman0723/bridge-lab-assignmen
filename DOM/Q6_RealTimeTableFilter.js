// ==========================================================================
// Question 6: Real-Time Table Filter Using 'input' Event
// ==========================================================================

const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('tableBody');
const studentRows = document.querySelectorAll('.student-row');
const counterInfo = document.getElementById('counterInfo');

// 1. Listen to real-time input event on search box
searchInput.addEventListener('input', () => {
    // REQUIREMENT: Searching should be case-insensitive
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    // Remove any previous "No results found" row
    const existingNoResult = document.getElementById('noResultsRow');
    if (existingNoResult) existingNoResult.remove();

    studentRows.forEach(row => {
        const studentName = row.children[0].textContent.toLowerCase();
        const studentBranch = row.children[1].textContent.toLowerCase();

        // Check if query matches Name or Branch (case-insensitive)
        if (studentName.includes(query) || studentBranch.includes(query)) {
            row.style.display = ''; // Row visible
            visibleCount++;
        } else {
            row.style.display = 'none'; // Row hidden
        }
    });

    // REQUIREMENT: If no results found -> show "No results found"
    if (visibleCount === 0) {
        const noResultRow = document.createElement('tr');
        noResultRow.id = 'noResultsRow';
        noResultRow.className = 'no-results-row';
        noResultRow.innerHTML = `
            <td colspan="3">
                🔍 No results found matching "<strong>${escapeHTML(searchInput.value)}</strong>"
            </td>
        `;
        tableBody.appendChild(noResultRow);
        counterInfo.textContent = 'Showing 0 of ' + studentRows.length + ' students';
    } else {
        counterInfo.textContent = `Showing ${visibleCount} of ${studentRows.length} students`;
    }
});

// Helper: Escape HTML
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
