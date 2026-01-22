document.querySelectorAll('.dropdown').forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list  = dropdown.querySelector('.dropdown__list');

    value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    dropdown.querySelectorAll('.dropdown__link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            value.textContent = link.textContent.trim();
            list.classList.remove('dropdown__list_active');
        });
    });
});