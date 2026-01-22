document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rotator').forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));
        
        if (currentIndex === -1) {
            currentIndex = 0;
            cases[0].classList.add('rotator__case_active');
        }
        
        let intervalId = null;
        
        function switchSlide() {
            cases[currentIndex].classList.remove('rotator__case_active');
            cases[currentIndex].style.color = '';
            
            currentIndex = (currentIndex + 1) % cases.length;
            const nextCase = cases[currentIndex];
            
            nextCase.classList.add('rotator__case_active');
            
            const color = nextCase.dataset.color;
            if (color) {
                nextCase.style.color = color;
            }
            
            const speed = Number(nextCase.dataset.speed) || 1000;
            
            clearInterval(intervalId);
            intervalId = setInterval(switchSlide, speed);
        }
        
        const initialSpeed = Number(cases[currentIndex].dataset.speed) || 1000;
        intervalId = setInterval(switchSlide, initialSpeed);
    });
});