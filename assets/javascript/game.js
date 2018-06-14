//========= Game.js================================================================================================================================

    // Installing Anti-Cheat
    console.log("If you're reading this you're a dirty filthy cheater and you probably need a shower.");
    console.log("Anyways, here's your filthy answer");
    // Defining the alphabet
    var theAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //Computer thinks of a letter
    var computerLetter = theAlphabet[Math.floor(Math.random()*theAlphabet.length)];

    // Define Game Stats
    var guesses = 10;
    var wins = 0;
    var losses = 0;

    // User enters string and presses submit
        document.onkeyup = function(event) {

            // Grabbing the users input from the key event and assigning it to variable "userText"
            var userText = event.key;

            // Displaying the user's input back onto the html 
            document.getElementById("userText").innerHTML = userText;

            // Game Logic
            //  If the user is incorrect, else if the user is correct. 
            if (computerLetter !== userText) {
                guesses--
                document.getElementById("comuterDialogue").innerHTML = "No, thats not it...";
                document.getElementById("computerDisplay").innerHTML = "?";
                console.log(computerLetter);
                document.getElementById("guesses").innerHTML = guesses; 
            } else if (computerLetter == userText) {
                wins++
                guesses = 10
                document.getElementById("comuterDialogue").innerHTML = "Correct! You may have ESP";
                document.getElementById("computerDisplay").innerHTML = computerLetter;
                computerLetter = theAlphabet[Math.floor(Math.random()*theAlphabet.length)];
            };

            // If the user runs out of guesses
            if (guesses == 0) {
                losses++
                guesses = 10
                computerLetter = theAlphabet[Math.floor(Math.random()*theAlphabet.length)];
                document.getElementById("comuterDialogue").innerHTML = "I don't think you have ESP... 50c to play again.";
            };

            // Display the game stats
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("losses").innerHTML = losses;
        };

