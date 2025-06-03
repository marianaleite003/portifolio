
// script.js - Interatividade suave

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('shadow-lg'));
        card.addEventListener('mouseleave', () => card.classList.remove('shadow-lg'));
    });
});
