const timerDisplay = document.getElementById('timer');

let timeLeft = Number(timerDisplay.textContent.trim());

function formatTime(seconds) {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds %60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

timerDisplay.textContent = formatTime(timeLeft);

const hiddenA = document.createElement('a');
hiddenA.style.display = 'none';
hiddenA.setAttribute('download', 'prize.txt');
hiddenA.setAttribute('target', '_blank');
document.body.appendChild(hiddenA);

const fileContent = `
Поздравляем!

Вы победили в конкурсе!

Дата победы: ${new Date().toLocaleString('ru-RU')}
`.trim();

const intervalId = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
        clearInterval(intervalId);
        timerDisplay.textContent = '00:00:00';

        alert('Вы победили в конкурсе!');

        const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
        const blobUrl = URL.createObjectURL(blob);

        hiddenA.href = blobUrl;
        hiddenA.click();

        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 100);
    }
}, 1000);