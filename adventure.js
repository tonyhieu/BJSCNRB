// This function is similar to "pick your own adventure" type games. Take a look here if you want ideas.
function start() {
  alert("Hi, ninja! We're going to go on an adventure! Where do you want to go? The ocean or the mountains?");
  var complete = 0;
  while (complete == 0) {
    var answer = prompt("Ocean or mountains?"); // Takes input.
    answer = answer.toUpperCase();
    if (answer == "OCEAN") {
      complete = 1;
      alert("Alright! Let's go to the ocean!");
      ocean(); // Notice how I use functions in order to go to the different "paths". This makes the code organized and easy to follow.
    } else if (answer == "MOUNTAINS") {
      complete = 1;
      alert("Alright! Let's go to the mountains!");
      mountains();
    } else {
      alert("Sorry, that's not an option.");
    }
  }
}

function mountains() {
  alert("Wow! The mountains are breathtaking!");
  alert("Wait, is that mountain moving? Uh oh! That's a golem! We need to fight it");

  // Look at this code if you want to make some sort of RPG system. I recommend changing switch to if, else, and else if statements if you're confused.
  var ninjaHP = 20;
  var golemHP = 100;

  while (ninjaHP > 0 && golemHP > 0) {
    var playerTurn = 0;
    alert(`Ninja HP: ${ninjaHP}, Golem HP: ${golemHP}`); // This format is a little weird; you can use alert("Ninja HP: " + ninjaHP + ", Golem HP: " + golemHP); instead.
    while (playerTurn == 0) {
      var choice = parseInt(prompt("What do you want to do? 1: Attack, 2: Heal, 3: Defend"));
      switch (choice) {
        case 1:
          playerTurn = 1;
          var damage = Math.floor(Math.random() * 6) + 13;
          golemHP -= damage;
          alert(`You punch the golem, dealing ${damage} damage.`);
          break;
        case 2:
          playerTurn = 2;
          var heal = Math.floor(Math.random() * 2) + 2;
          ninjaHP += heal;
          if (ninjaHP > 20) 
            ninjaHP = 20;
          alert(`You heal yourself, healing ${heal} HP.`);
          break;
        case 3:
          playerTurn = 3;
          alert(`You defend yourself.`);
          break;
        default:
          alert("Invalid choice.");
          break;
      }
    }

    var golemTurn = Math.floor(Math.random() * 3);
    switch (golemTurn) {
      case 0:
      case 1:
        var defense;
        if (playerTurn == 3) {
          defense = 0.25;
        } else {
          defense = 1;
        }
        var damage = Math.floor(defense * (Math.random() * 3 + 4));
        ninjaHP -= damage;
        alert(`The golem chucks a rock at you, dealing ${damage} damage!`);
        break;
      case 2:
        var heal = Math.floor(Math.random() * 5 + 10);
        alert(`The golem rebuilds itself with a nearby boulder, healing ${heal} HP`);
        break;
    }
  }

  if (golemHP <= 0 && ninjaHP <= 0) {
    alert("Good job defeating the golem! Those are some nasty bruises you've got. Let's head back.");
    dojo(1);
  } else if (golemHP <= 0) {
    alert("Wow! You crushed that golem to pieces! Nice job! Let's go back to the dojo, now.");
    dojo(1);
  } else {
    alert("We were no match for that golem. Uh oh! Avalanche!! Let's get out of here!");
    dojo(2);
  }
}

function dojo (ending) {
  switch (ending) {
    case 1:
      alert("Great job defeating that monster. That was a fun adventure! Let's do it again some time.");
      break;
    case 2:
      alert("Ah, that monster was too strong for us. Maybe next time we'll beat them. It was fun, nonetheless.");
  }
}

function ocean() {
  alert("Wow! The ocean is really beautiful!");
  alert("Oh no! There is a giant octopus that's terrorizing everyone! Let's fight him.");

  var ninjaHP = 20;
  var octoHP = 100;

  while (ninjaHP > 0 && octoHP > 0) {
    var playerTurn = 0;
    alert(`Ninja HP: ${ninjaHP}, Octopus HP: ${octoHP}`);
    while (playerTurn == 0) {
      var choice = parseInt(prompt("What do you want to do? 1: Attack, 2: Heal, 3: Defend"));
      switch (choice) {
        case 1:
          playerTurn = 1;
          var damage = Math.floor(Math.random() * 6) + 13;
          octoHP -= damage;
          alert(`You smack the octopus, dealing ${damage} damage.`);
          break;
        case 2:
          playerTurn = 2;
          var heal = Math.floor(Math.random() * 2) + 2;
          ninjaHP += heal;
          if (ninjaHP > 20) 
            ninjaHP = 20;
          alert(`You heal yourself, healing ${heal} HP.`);
          break;
        case 3:
          playerTurn = 3;
          alert(`You defend yourself.`);
          break;
        default:
          alert("Invalid choice.");
          break;
      }
    }

    var octoTurn = Math.floor(Math.random() * 3);
    switch (octoTurn) {
      case 0:
      case 1:
        var defense;
        if (playerTurn == 3) {
          defense = 0.25;
        } else {
          defense = 1;
        }
        var damage = Math.floor(defense * (Math.random() * 3 + 4));
        ninjaHP -= damage;
        alert(`The octopus hits you with one of its tentacles, dealing ${damage} damage!`);
        break;
      case 2:
        var heal = Math.floor(Math.random() * 5 + 10);
        alert(`The octopus regenerates one of its tentacles, healing ${heal} HP`);
        break;
    }
  }

  if (octoHP <= 0 && ninjaHP <= 0) {
    alert("Wow! You defeated the octopus, but you look pretty hurt yourself. Let's get you back to the dojo...");
    dojo(1);
  } else if (octoHP <= 0) {
    alert("Wow! You destroyed that octopus! Awesome job! Let's go back to the dojo, now.");
    dojo(1);
  } else {
    alert("We were no match for that octopus. We gotta run!");
    dojo(2);
  }
}


start();
