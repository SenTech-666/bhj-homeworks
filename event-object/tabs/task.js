document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tab__navigation');
    
    tabContainers.forEach(navigation => {
        const tabs = navigation.querySelectorAll('.tab');
        const contentsContainer = navigation.nextElementSibling;
        
        if (!contentsContainer || !contentsContainer.classList.contains('tab__contents')) {
            console.warn('Не найден соответствующий .tab__contents для навигации', navigation);
            return;
        }
        
        const contents = contentsContainer.querySelectorAll('.tab__content');
        
        if (tabs.length !== contents.length) {
            console.warn('Количество вкладок и контента не совпадает!', {
                tabs: tabs.length,
                contents: contents.length
            });
        }
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));
                tab.classList.add('tab_active');
                
                if (contents[index]) {
                    contents[index].classList.add('tab__content_active');
                }
            });
        });
    });
});