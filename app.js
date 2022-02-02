const page = document.getElementsByTagName('body');
const pageId = page[0].id;

//Form variable
const players = new URLSearchParams(window.location.search);
const myPlayerOne = cleanInput(players.get('player-one'));
const myPlayerTwo = cleanInput(players.get('player-two'));
//Main game variables
const playerOneLetters = ['s1', 'k1', 'a1', 't1', 'e1'];
const playerTwoLetters = ['s2', 'k2', 'a2', 't2', 'e2'];
let playerOneState = 0;
let playerTwoState = 0;
let playerOneFlag = false;
let playerTwoFlag = false;

//function to validate input and clean up 
function cleanInput(str) {
  if (!str) return null;
  return str.trim();
}
console.log(page);
console.log(pageId)
if(pageId == 'main-game'){
let playerOneName = document.getElementById('player-one-name');

playerOneName.innerHTML = myPlayerOne;

let playerTwoName = document.getElementById('player-two-name');

playerTwoName.innerHTML = myPlayerTwo;


loadEventListeners();


function loadEventListeners() {

  playerOneLetters.forEach(function (letter) {
    const myLetter = document.getElementById(letter);
    myLetter.addEventListener('click', validateToggle);
  })


  playerTwoLetters.forEach(function (letter) {
    const myLetter = document.getElementById(letter);
    myLetter.addEventListener('click', validateToggle);
  })
}
}



//Function to change color of the selected letter
function toggleLetterColor(player) {
  let myPlayer = document.getElementById(player);
  if (myPlayer.style.backgroundColor == 'coral'){
    myPlayer.style.backgroundColor = '';
  }else
    myPlayer.style.backgroundColor = 'coral';
}






function validateToggle(e){
  const fullPlayer = e.target.id;
  const selectedLetter = e.target.id[0];
  const selectedPlayer = e.target.id[1];

   if(selectedPlayer == 1){
    if(selectedLetter == 's' && (playerOneState == 0 || playerOneState == 1)){
      if(playerOneState == 0){
        playerOneState++;
        toggleLetterColor(fullPlayer);
      }else{
        playerOneState--;
        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 'k' && (playerOneState == 1 || playerOneState == 2)){

      if(playerOneState == 1){
        playerOneState++;
        toggleLetterColor(fullPlayer);
      }else{
        playerOneState--;
  
        toggleLetterColor(fullPlayer);
      } 
    }else if(selectedLetter == 'a' && (playerOneState == 2 || playerOneState == 3)){
      if(playerOneState == 2){
        playerOneState++;
  
        toggleLetterColor(fullPlayer);
      }else{
        playerOneState--;
  
        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 't' && (playerOneState == 3 || playerOneState == 4)){
      if(playerOneState == 3){
        playerOneState++;
        document.getElementById('e1').outerHTML = `<a class="skate-card" href='play-again.html?player-one=Noah' id="e1">E</a>`
        toggleLetterColor(fullPlayer);
      }else{
        playerOneState--;
        document.getElementById('e1').outerHTML = `<button class="skate-card" id="e1">E</button>`
        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 'e' && playerOneState == 4 ){
      toggleLetterColor(fullPlayer)
      playerOneFlag = !playerOneFlag;
 }
}

  if(selectedPlayer == 2){
    if(selectedLetter == 's' && (playerTwoState == 0 || playerTwoState == 1)){
      if(playerTwoState == 0){
        playerTwoState++;

        toggleLetterColor(fullPlayer);
      }else{
        playerTwoState--;

        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 'k' && (playerTwoState == 1 || playerTwoState == 2)){
      if(playerTwoState == 1){
        playerTwoState++;
        toggleLetterColor(fullPlayer);
      }else{
        playerTwoState--;

        toggleLetterColor(fullPlayer);
      } 
    }else if(selectedLetter == 'a' && (playerTwoState == 2 || playerTwoState == 3)){
      if(playerTwoState == 2){
        playerTwoState++;

        toggleLetterColor(fullPlayer);
      }else{
        playerTwoState--;

        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 't' && (playerTwoState == 3 || playerTwoState == 4)){
      if(playerTwoState == 3){
        playerTwoState++;
        toggleLetterColor(fullPlayer);
        document.getElementById('e2').outerHTML = `<a class="skate-card" href='play-again.html?player-two=Alexis' id="e2">E</a>`
      }else{
        playerTwoState--;
        document.getElementById('e2').outerHTML = `<button class="skate-card" id="e2">E</button>`
        toggleLetterColor(fullPlayer);
      }
    }else if(selectedLetter == 'e' && playerTwoState == 4 ){
      toggleLetterColor(fullPlayer)
      playerTwoFlag = !playerTwoFlag;

 }
  }
}

if (pageId == 'play-again'){

  const theWinner = new URLSearchParams(window.location.search);
  const winPlayer = theWinner.get('player-one') != null? theWinner.get('player-one') : theWinner.get('player-two');
  document.getElementById('win-player').innerHTML = `${winPlayer} Wins!`;

}
  


