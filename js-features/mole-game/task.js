function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let deadCount = 0;
let lostCount = 0;

const deadDisplay = document.getElementById('dead');
const lostDisplay = document.getElementById('lost');

function checkGameEnd() {
    if (deadCount >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
    } else if (lostCount >= 5) {
        alert('Игра окончена. Вы проиграли (5 промахов)');
        resetGame();
    }
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    deadDisplay.textContent = deadCount;
    lostDisplay.textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            deadDisplay.textContent = deadCount;
        } else {
            lostCount++;
            lostDisplay.textContent = lostCount;
        }

        checkGameEnd();
    };
}