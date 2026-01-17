const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let lastClickTime = null;
let isBigger = false;

cookie.onclick = function () {
    clicks++;
    counter.textContent = clicks;

    if (isBigger) {
        cookie.width = 200;
        isBigger = false;
    } else {
        cookie.width = 220;
        isBigger = true;
    }

    const now = new Date();

    if (lastClickTime !== null) {
        const timeDiffMs = now - lastClickTime;
        const timeDiffSec = timeDiffMs / 1000;
        const speed = 1 / timeDiffSec;

        let speedElement = document.getElementById('clicker__speed');
        if (!speedElement) {
            speedElement = document.createElement('span');
            speedElement.id = 'clicker__speed';
            speedElement.style.marginLeft = '20px';
            speedElement.style.color = '#666';
            speedElement.style.fontSize = '0.9em';

            const status = document.querySelector('.clicker__status');
            if (status) {
                status.appendChild(document.createTextNode('   Скорость: '));
                status.appendChild(speedElement);
            }
        }

        speedElement.textContent = speed.toFixed(2) + ' клик/сек';
    }

    lastClickTime = now;
};