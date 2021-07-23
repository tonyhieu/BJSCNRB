function getSolution () {
  var possibleSolutions = ["codeninjas", "python", "javascript", "guy", "string", "variable", "integer"];
  var randomIndex = Math.floor(Math.random() * possibleSolutions.length);
  return possibleSolutions[randomIndex];
}

function gameOver (solution, won) {
  var hangman = "___\n|/|\n|@\n/|\\\n|/\\\n|\n=====";
  message = "";
  if (won) {
    message = "YOU WIN!"
  } else {
    message = "GAME OVER\n\n" + hangman;
  }
  message += "\n\nThe correct answer was " + solution + ".";
  alert(message);
  return message;
}

function playHangman () {
  var solution = getSolution().toUpperCase();
  var solutionLetters = solution.split("");
  var wrongLetters = [];
  var lives = 7;
  var progress = "_".repeat(solution.length).split('');

  var confirmPlay = confirm("Let's play Hangman!\n\nMy word has " + solution.length + " letters in it. Are you ready?");

  if (!confirmPlay) {
    return gameOver(solution, false);
  }

  while (wrongLetters.length < lives) {
    var promptMessage = "Here is your progress on the word so far: \n" + progress.join(' ') + "\nWrong guesses: [" + wrongLetters.toString() + "]\n\nPick a letter:";
    var userInput = prompt(promptMessage);

    var guess = userInput.toUpperCase();
    var goodGuess = false;

    for(var i = 0; i < solutionLetters.length; i++) {
      if (solutionLetters[i] == guess) {
        goodGuess = true;
        progress[i] = guess;
        
      }
    }

    if (goodGuess) {
      if (progress.join('') == solution) {
        return gameOver(solution, true);
      }
    } else {
      wrongLetters.push(guess);
      alert("Sorry, " + guess + " is incorrect.\nYou have " + (lives - wrongLetters.length) + " strikes left.");
    }
  }
  return gameOver(solution, false);
}

playHangman();
