const choices = ['rock', 'paper', 'scissors'];
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const resetButton = document.getElementById('reset');
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playRound(playerChoice, computerChoice);
    });
});

resetButton.addEventListener('click', resetGame);

function playRound(player, computer) {
    if (player === computer) {
        resultText.innerText = `It's a draw! Both chose ${player}`;
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        resultText.innerText = `You win! ${player} beats ${computer}`;
        playerScore++;
        playerScoreSpan.innerText = playerScore;
    } else {
        resultText.innerText = `You lose! ${computer} beats ${player}`;
        computerScore++;
        computerScoreSpan.innerText = computerScore;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    resultText.innerText = 'Result: Make a move!';
}
