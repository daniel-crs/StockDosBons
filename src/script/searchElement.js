const InputSearch = document.getElementById('InputSearch');

InputSearch.addEventListener('input', function () {
    const filter = InputSearch.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.cardContent h2').textContent.toLowerCase();
        const tag = card.querySelector('.tag').textContent.toLowerCase();

        if (title.includes(filter) || tag.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});