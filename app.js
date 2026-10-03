//Check page variables
const page = document.getElementsByTagName('body');
const pageId = page[0].id;

//Form variable
const players = new URLSearchParams(window.location.search);
const myPlayerOne = cleanInput(players.get('player-one'));
const myPlayerTwo = cleanInput(players.get('player-two'));

//Main game variables
var playerObj = {
  1: {state: 0, letters: ['s', 'k', 'a', 't', 'e']},
  2: {state: 0, letters: ['s', 'k', 'a', 't', 'e']}
}

//function to validate input and clean up 
function cleanInput(str) {
  if (!str) return null;
  return str.trim();
}

//This block of code is only run on main game
//page loads

if (pageId == 'main-game') {
  let playerOneName = document.getElementById('player-one-name');

  playerOneName.textContent = myPlayerOne;

  let playerTwoName = document.getElementById('player-two-name');

  playerTwoName.textContent = myPlayerTwo;


  loadEventListeners();
}

//Event listeners that tie the player letter ids
//to click events and calls the 'validateToggle'
//function to keep track of the state of the letters
//and restrict toggling only to the currently highlighted
//letter and the letter next inline.
function loadEventListeners() {

  let playerOneLetters = playerObj[1]['letters']
  let playerTwoLetters = playerObj[2]['letters']

  playerOneLetters.forEach(function (letter) {
    const myLetter = document.getElementById(letter + "1");
    myLetter.addEventListener('click', validateToggle);
  })


  playerTwoLetters.forEach(function (letter) {
    const myLetter = document.getElementById(letter + "2");
    myLetter.addEventListener('click', validateToggle);
  })
}

//Function to change color of the selected letter
function toggleLetterColor(player) {
  let myPlayer = document.getElementById(player);
  if (myPlayer.style.backgroundColor == 'coral') {
    myPlayer.style.backgroundColor = '';
  } else
    myPlayer.style.backgroundColor = 'coral';
}


//This function is called on every click of a player's letter.
//It checks to see if the letter should be toggled and keeps 
//track of the state of each player's current letter selection.
//Finally, when the win condition is met, it changes the last letter
// to an anchor tag to allow the player to see the final win screen
//and opt to play again.
function validateToggle(e) {
  
  //Holds the full letter and player number of the letter clicked
  const fullPlayer = e.target.id;

  const selectedLetter = e.target.id[0];
  const selectedPlayer = e.target.id[1];

  //If statements that track the player, the letter state, and
  //calls the validate toggle statements when appropriate

  if (selectedLetter == 's' && ( playerObj[selectedPlayer].state == 0 || playerObj[selectedPlayer].state == 1)) {
    if (playerObj[selectedPlayer].state == 0) {
      playerObj[selectedPlayer].state++;
      toggleLetterColor(fullPlayer);
    } else {
      playerObj[selectedPlayer].state--;
      toggleLetterColor(fullPlayer);
    }
  } else if (selectedLetter == 'k' && (playerObj[selectedPlayer].state == 1 || playerObj[selectedPlayer].state == 2)) {

    if (playerObj[selectedPlayer].state == 1) {
      playerObj[selectedPlayer].state++;
      toggleLetterColor(fullPlayer);
    } else {
      playerObj[selectedPlayer].state--;

      toggleLetterColor(fullPlayer);
    }
  } else if (selectedLetter == 'a' && (playerObj[selectedPlayer].state == 2 || playerObj[selectedPlayer].state == 3)) {
    if (playerObj[selectedPlayer].state == 2) {
      playerObj[selectedPlayer].state++;

      toggleLetterColor(fullPlayer);
    } else {
      playerObj[selectedPlayer].state--;

      toggleLetterColor(fullPlayer);
    }
  } else if (selectedLetter == 't' && (playerObj[selectedPlayer].state == 3 || playerObj[selectedPlayer].state == 4)) {
    if (playerObj[selectedPlayer].state == 3) {
      playerObj[selectedPlayer].state++;
      document.getElementById('e1').outerHTML = `<a class="skate-card" href='play-again.html?player-two=${myPlayerTwo}' id="e1">E</a>`
      toggleLetterColor(fullPlayer);
    } else {
      playerObj[selectedPlayer].state--;
      document.getElementById('e1').outerHTML = `<button class="skate-card" id="e1">E</button>`
      toggleLetterColor(fullPlayer);
    }
  } else if (selectedLetter == 'e' && playerObj[selectedPlayer].state == 4) {
    toggleLetterColor(fullPlayer)
  }
  
}

//This block of code is only ran when the play-again
//page loads
if (pageId == 'play-again') {
  const theWinner = new URLSearchParams(window.location.search);
  const winPlayer = theWinner.get('player-one') != null ? theWinner.get('player-one') : theWinner.get('player-two');
  document.getElementById('win-player').textContent = `${winPlayer} Wins!`;

}



