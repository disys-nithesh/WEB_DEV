const p1 = {
    score: 0,
    Button: document.querySelector('#p1Button'),
    Display: document.querySelector('#p1Display')
};
const p2 = {
    score: 0,
    Button: document.querySelector('#p2Button'),
    Display: document.querySelector('#p2Display')
}
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const duce=document.querySelector('#duce');

let winningScore = 11;
let isGameOver = false;

function updateScore(player, opponent) {
    if(player.score===opponent.score && player.score===winningScore-1){
        duce.innerText='It is a Duce||Consecutive two points to win';
        winningScore=winningScore+1;
    }
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.Display.classList.add('has-text-success')
            opponent.Display.classList.add('has-text-danger')
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.Display.textContent = player.score;

    }
}
p1Button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2Button.addEventListener('click', function () {
    updateScore(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    duce.innerText='Use the buttons below to keep score';
    for (let p of [p1, p2]) {
        p.score = 0;
        p.Display.textContent = 0;
        p.Display.classList.remove('has-text-danger', 'has-text-success')
        p.Button.disabled = false;
    }
}