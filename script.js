const quotes = [
    "Do, or do not. There is no try. – Yoda",
    "In my experience, there is no such thing as luck. – Obi-Wan Kenobi",
    "The Force will be with you. Always. – Obi-Wan Kenobi"
];

// Display a random quote
document.getElementById('quote-display').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Handle trivia quiz submission
document.getElementById('trivia-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="question1"]:checked');
    
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        const resultDisplay = document.getElementById('trivia-result');
        
        if (answer === 'A') {
            resultDisplay.innerText = "Correct! Millennium Falcon is Han Solo's ship.";
        } else {
            resultDisplay.innerText = "Wrong answer! The correct answer is A) Millennium Falcon.";
        }
    } else {
        alert('Please select an answer.');
    }
});