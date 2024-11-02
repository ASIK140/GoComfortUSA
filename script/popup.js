document.addEventListener('DOMContentLoaded', () => {
    // Show the popup after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        const popup = document.getElementById('offerPopup');
        popup.style.display = 'block';
    }, 3000);

    // Close the popup when the close button is clicked
    const closeBtn = document.getElementById('closePopup');
    closeBtn.addEventListener('click', () => {
        const popup = document.getElementById('offerPopup');
        popup.style.display = 'none';
    });
});
