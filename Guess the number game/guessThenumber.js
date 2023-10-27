/* PROBLEM STATEMENT :
        " I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again." - your boss.
        
        Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:
        
        1. Generate a random number between 1 and 100.
        2. Record the turn number the player is on. Start it on 1.
        3. Provide the player with a way to guess what the number is.
        4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
        5. Next, check whether it is the correct number.
        6. If it is correct:
            i. Display congratulations message.
            ii. Stop the player from being able to enter more guesses (this would mess the game up).
            iii. Display control allowing the player to restart the game.
        7. If it is wrong and the player has turns left:
            i. Tell the player they are wrong and whether their guess was too high or too low.
            ii. Allow them to enter another guess.
            iii. Increment the turn number by 1.
        8. If it is wrong and the player has no turns left:
            i. Tell the player it is game over.
            ii. Stop the player from being able to enter more guesses (this would mess the game up).    
            iii. Display control allowing the player to restart the game.
        9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.*/

        // Your JavaScript goes here.

        let randomNumber = Math.floor(Math.random() * 100) + 1;
        //console.log(randomNumber);

        const guesses = document.querySelector(".guesses");
        const lastResult = document.querySelector(".lastResult");
        const lowOrHi = document.querySelector(".lowOrHi");

        const guessSubmit = document.querySelector(".guessSubmit");
        const guessField = document.querySelector(".guessField");

        let guessCount = 1;
        let resetButton;

        //to check whether a player's guess is correct or not, and respond appropriately.
        function checkGuess() {
            const userGuess = Number(guessField.value);
            //In this case, the test is testing whether the guessCount variable is equal to 1 (i.e. whether this is the player's first go or not).
            if (guessCount === 1) {
                guesses.textContent = "Previous guesses:";
            }
            guesses.textContent = `${guesses.textContent} ${userGuess}`; //template literal to append the current userGuess value onto the end of the guesses paragraph.

            if (userGuess === randomNumber) {
                lastResult.textContent = "Congratulations! You got it right!";
                lastResult.style.backgroundColor = "green";
                lowOrHi.textContent = ""; //clear the contents of the Low/High guess information box.
                setGameOver();
            } else if (guessCount === 10) {
                //This one checks whether this turn is the user's last turn.
                lastResult.textContent = "!!!GAME OVER!!!";
                lowOrHi.textContent = "";
                setGameOver();
            } else {
                //player didn't guess right, but they have more guesses left.

                lastResult.textContent = "Wrong!";
                lastResult.style.backgroundColor = "red";
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = "Last guess was too low!";
                } else if (userGuess > randomNumber) {
                    lowOrHi.textContent = "Last guess was too high!";
                }
            }
            //get us ready for the next guess to be submitted.
            guessCount++;
            guessField.value = ""; //empty the value out of the form text field and focus it again.
            guessField.focus();
        }
        // it won't do anything because we haven't called it yet. we have to call this function when event is fired at submit button clicked.
        guessSubmit.addEventListener("click", checkGuess);


        //finishing game functionality.
        function setGameOver() {
            // disable the form text input and button.
            guessField.disabled = true;
            guessSubmit.disabled = true;
            //generate a new <button> element, 

            resetButton = document.createElement("button");
            resetButton.textContent = "Start new game";
            document.body.append(resetButton);

            //sets an event listener on our new button so that when it is clicked, a function called resetGame() is run.
            resetButton.addEventListener("click", resetGame);
        }

        //reset the game!..

        function resetGame() {
            guessCount = 1;

            //Empties all the text out of the information paragraphs by selecting all paragraphs inside <div class="resultParas"></div>, 

            const resetParas = document.querySelectorAll(".resultParas p");
            //then loop through each one, setting their textContent to '' (an empty string).
            for (const resetPara of resetParas) {
                resetPara.textContent = "";
            }

            resetButton.parentNode.removeChild(resetButton); //Removes the reset button from our code.

            //Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = "";
            guessField.focus();

            lastResult.style.backgroundColor = "white";

            randomNumber = Math.floor(Math.random() * 100) + 1;
        }