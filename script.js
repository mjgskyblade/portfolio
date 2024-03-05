// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Select the navbar element
    const navBar = document.querySelector(".navbar");
    // Select all list items within the navbar
    const allLi = document.querySelectorAll("li");

    // Iterate over each list item
    allLi.forEach((li, index) => {
        // Add a click event listener to each list item
        li.addEventListener("click", (e) => {
            // Prevent the default behavior of anchor tags
            e.preventDefault();
            // Get the target section's ID from the href attribute of the anchor tag within the list item
            const targetId = li.querySelector("a").getAttribute("href");
            // Select the target section using its ID
            const targetSection = document.querySelector(targetId);

            // Remove the 'active' class from the currently active list item
            navBar.querySelector(".active").classList.remove("active");
            // Add the 'active' class to the clicked list item
            li.classList.add("active");

            // Move the indicator to the clicked list item's position
            const indicator = document.querySelector(".indicator");
            indicator.style.transform = `translateX(calc(${index * 90}px))`;

            // Smoothly scroll to the target section
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Define the maximum number of attempts for the 'Guess the Number' game
let maxAttempts = 5;

// Function to start the 'Guess the Number' game
function startGuessNumber() {
    // Function to handle the game logic
    function guessNumber() {
        // Generate a random secret number between 1 and 100
        let secretNumber = Math.floor(Math.random() * 100) + 1;
        // Initialize the number of attempts
        let attempts = 0;

        // Function to play the game
        function playGame() {
            // Prompt the user to guess a number
            let guess = parseInt(prompt("Guess a number between 1 and 100:"));

            // Check if the input is a valid number
            if (isNaN(guess)) {
                alert("Please enter a valid number!");
                return;
            }

            // Increment the number of attempts
            attempts++;

            // Check if the guess is correct
            if (guess === secretNumber) {
                alert("Congratulations! You guessed the correct number in " + attempts + " attempts.");
            } else if (guess < secretNumber) {
                alert("Too low! Try again.");
                // Check if the maximum number of attempts has been reached
                if (attempts < maxAttempts) {
                    // Allow the user to guess again
                    playGame();
                } else {
                    // Inform the user that they've run out of attempts
                    alert("You've run out of attempts. The correct number was " + secretNumber);
                }
            } else {
                alert("Too high! Try again.");
                // Check if the maximum number of attempts has been reached
                if (attempts < maxAttempts) {
                    // Allow the user to guess again
                    playGame();
                } else {
                    // Inform the user that they've run out of attempts
                    alert("You've run out of attempts. The correct number was " + secretNumber);
                }
            }
        }

        // Start the game
        playGame();
    }

    // Call the function to start the game
    guessNumber();
}

// Function to start the 'Rock, Paper, Scissors' game
function startRockPaperScissors() {
    // Function to handle the game logic
    function playGame() {
        // Prompt the user to choose 'Rock', 'Paper', or 'Scissors'
        let playerChoice = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
        // Generate a random choice for the computer
        let computerChoice = Math.random();

        // Map the random number to 'Rock', 'Paper', or 'Scissors' based on probability
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // Determine the outcome of the game
        if (playerChoice === computerChoice) {
            alert("It's a tie!");
        } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
            alert("You win! Computer chose " + computerChoice + ".");
        } else {
            alert("You lose! Computer chose " + computerChoice + ".");
        }

        // Ask the user if they want to play again
        let playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            // If yes, restart the game
            playGame();
        }
    }

    // Start the game
    playGame();
}
