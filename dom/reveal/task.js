document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const checkVisibility = () => {
        const viewportHeight = window.innerHeight;

        reveals.forEach(el => {
            const { top, bottom } = el.getBoundingClientRect();

            if (top < viewportHeight * 0.8 && bottom > 0) {
                el.classList.add('reveal_active');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});