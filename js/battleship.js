/* Battleship game from HeadFirstJavaScript Programming - Chapter 02.

To play a battleship game with one ship(3 cells) on a 1x7 grid */

/* Declare variables to hold locations of each cell of the ship */
var randomLoc = Math.floor(Math.random() * 5); // To generate a random number between 0 and 4
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess; // Variable to hold user's current guess
var hits = 0; // Variable to hold the number of hits
var guesses = 0; // Variable to hold the number of misses
var isSunk = false; // Variable to keep track of whether the ship is sunk or not

while (isSunk == false){
  // Get user's input
  guess = prompt("Ready, aim, fire! (enter a number from 0-6): ");
  if (guess < 0 || guess > 6) // Check the validity of the guess
  {
    alert ("Please enter a valid cell number!"); // If guess is invalid
  }
  else {
    // If guess is valid
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3){
      alert ("HIT!"); // If the guess matches one of the ship's location
      hits = hits + 1;
      // To check if the ship is sunk
      if (hits == 3){
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert ("MISS");
    }
  }
}

// Alert the statistics
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);
alert (stats);
