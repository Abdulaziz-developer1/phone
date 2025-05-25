const searchIcon = document.getElementById('searchIcon'); // Correct ID
const block = document.getElementById('toggle-p');

if (searchIcon && block) {
    searchIcon.addEventListener('click', function () {
        // Toggle visibility of the message
        block.style.display = block.style.display === 'block' ? 'none' : 'block';
    });
} else {
    console.error("Element not found: Check 'searchIcon' or 'toggle-p' IDs.");
}
