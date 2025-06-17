let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function submitGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "🚫 Enter a valid number between 1 and 100!";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        message.style.color = "lime";
    } else if (guess > secretNumber) {
        message.textContent = "📉 Too high!";
        message.style.color = "lightblue";
    } else {
        message.textContent = "📈 Too low!";
        message.style.color = "lightblue";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "🧠 Let's start!";
    document.getElementById("message").style.color = "white";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guessInput").value = "";
}