const game = () => {
    // Beginscore aanmaken
    let pScore = 0;
    let cScore = 0;

    //Start game functie aanmaken
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Speel match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // Commputer opties (array)
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                // Computer optie, random getal tussen 0,1,2
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Check score
                    compareHands(this.textContent, computerChoice);

                    // Update images
                    playerHand.src = `img/${this.textContent}.png`;
                    computerHand.src = `img/${computerChoice}.png`;
                }, 2000);

                // Animatie
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update tekst
        const winner = document.querySelector(".winner");

        // Check voor gelijkspel
        if (playerChoice === computerChoice) {
            winner.textContent = "Gelijkspel";
            return;
        }

        // Check voor rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Jij wint";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wint";
                cScore++;
                updateScore();
                return;
            }
        }

        // Check voor paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wint";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Jij wint";
                pScore++;
                updateScore();
                return;
            }
        }

        // Check voor scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer wint";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Jij wint";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    // Alle functies aanroepen
    startGame();
    playMatch();
};

// Spel uitvoeren
game();