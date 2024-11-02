document.addEventListener('DOMContentLoaded', () => {
    const span = document.getElementById('changingText');
    const texts = ["First Text", "Second Text", "Third Text", "Fourth Text"];
    let index = 0;

    setInterval(() => {
        span.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 5000); // Change text every 5000 milliseconds (5 seconds)
});