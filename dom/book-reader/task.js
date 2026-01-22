document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // Все элементы управления (размер + цвет текста + фон)
    const controls = document.querySelectorAll('.book__control');

    controls.forEach(control => {
        const links = control.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // 1. Убираем active у всех ссылок внутри этого блока управления
                links.forEach(l => l.classList.remove('font-size_active', 'color_active'));

                // 2. Делаем текущую ссылку активной
                link.classList.add('font-size_active', 'color_active');

                // 3. Определяем, какой это тип управления
                if (control.classList.contains('book__control_font-size')) {
                    // ─────────────── Размер шрифта ───────────────
                    const size = link.dataset.size; // "small", "big" или undefined (стандарт)

                    // Убираем все возможные классы размера
                    book.classList.remove('book_fs-small', 'book_fs-big');

                    if (size === 'small') {
                        book.classList.add('book_fs-small');
                    } else if (size === 'big') {
                        book.classList.add('book_fs-big');
                    }
                    // если size отсутствует → оставляем стандартный размер (ничего не добавляем)
                }

                else if (control.classList.contains('book__control_color')) {
                    // ─────────────── Цвет текста ───────────────
                    const textColor = link.dataset.textColor; // "black", "gray", "whitesmoke"

                    // Убираем все классы цвета текста
                    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

                    if (textColor) {
                        book.classList.add(`book_color-${textColor}`);
                    }
                }

                else if (control.classList.contains('book__control_background')) {
                    // ─────────────── Цвет фона ───────────────
                    const bgColor = link.dataset.bgColor; // "black", "gray", "white"

                    // Убираем все классы фона
                    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

                    if (bgColor) {
                        book.classList.add(`book_bg-${bgColor}`);
                    }
                }
            });
        });
    });
});