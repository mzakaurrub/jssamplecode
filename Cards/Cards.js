let cards = [];
        let sum = 0;
        let hasBlackjack = false;
        let isAlive = false;
        let message = "";

        function startGame() {
            isAlive = true;
            let firstCard = getRandomCard();
            let secondCard = getRandomCard();
            sum = firstCard + secondCard;
            cards = [firstCard, secondCard];
            renderGame();
        }

        function renderGame() {
            document.getElementById("sum").innerText = "Sum: " + sum;
            document.getElementById("cards").innerHTML = "Cards: " + cards.join(" ");
            if (sum <= 20) {
                message = "Do you want to draw a new card?";
            } else if (sum === 21) {
                message = "You've got Blackjack!";
                hasBlackjack = true;
            } else {
                message = "You're out of the game!";
                isAlive = false;
            }
            document.getElementById("message").innerText = message;

            if (isAlive && !hasBlackjack) {
                document.getElementById("new-card-btn").style.display = "inline";
            } else {
                document.getElementById("new-card-btn").style.display = "none";
            }
        }

        function getRandomCard() {
            return Math.floor(Math.random() * 10) + 1;
        }

        document.getElementById("start-btn").addEventListener("click", startGame);
        document.getElementById("new-card-btn").addEventListener("click", function() {
            let newCard = getRandomCard();
            sum += newCard;
            cards.push(newCard);
            renderGame();
        });