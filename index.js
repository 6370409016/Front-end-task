const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    const cardTop = card.querySelector('.card-top'); // Target only the card-top area
    const radioInput = card.querySelector('.radio-input input'); // Get the radio button for the card

    cardTop.addEventListener('click', () => {
        // Uncheck all radio buttons
        document.querySelectorAll('.radio-input input').forEach((radio) => {
            radio.checked = false;
        });

        // Check the radio button of the clicked card
        radioInput.checked = true;

        // Toggle the expansion of the clicked card
        card.classList.toggle('expanded');
    });
});
