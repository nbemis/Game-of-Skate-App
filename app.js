//Form variable
const players = new URLSearchParams(window.location.search);
const myPlayerOne = cleanInput(players.get('player-one'));
const myPlayerTwo = cleanInput(players.get('player-two'));

//function to validate input and clean up 
function cleanInput(str){
  if (!str) return null;
  return str.trim();
}


let playerOneObj = {
  playerNumber: 1,
  letters: {'s' : false, 'k' : false, 'a' : false, 't' : false, 'e' : false}
}

let playerTwoObj = {
  playerNumber: 2,
  letters: {'s' : false, 'k' : false, 'a' : false, 't' : false, 'e' : false}
}



//Main game variables
const playerOneLetters = ['s1', 'k1', 'a1', 't1', 'e1'];
const playerTwoLetters = ['s2', 'k2', 'a2', 't2', 'e2'];



loadEventListeners();


function loadEventListeners(){

  playerOneLetters.forEach(function(letter){
    const myLetter = document.getElementById(letter);
    myLetter.addEventListener('click', validateToggle);
  })

  playerTwoLetters.forEach(function(letter){
    const myLetter = document.getElementById(letter);
    myLetter.addEventListener('click', validateToggle);
  })
}


// The user should only be able to toggle the letter if the 
// previous letters have already been selected. This function
// validates if the letter selected by the user should change 
// color by checking if the previous letters have already been
// selected.

function validateToggle(e){
  const playerLetter = e.target.id[0];
  const player = e.target.id[1] === '1'? 1 : 2;
  const fullPlayer = playerLetter + player;

  if(player === 1){
    for(let letter in playerOneObj.letters){
      if(letter !== playerLetter){
       if(playerOneObj.letters[letter] != true){
        console.log('Will not change color'); 
        return null;
       }else{
        continue;
       }
      }
      playerOneObj.letters[letter] = !playerOneObj.letters[letter]; 
      toggleLetterColor(fullPlayer)
      return null
    }

  }else{
    for(let letter in playerTwoObj.letters){
      if(letter !== playerLetter){
       if(playerTwoObj.letters[letter] != true){
        console.log('Will not change color'); 
        return null;
       }else{
        continue;
       }
      }
      playerTwoObj.letters[letter] = !playerTwoObj.letters[letter]; 
      console.log(fullPlayer)
      toggleLetterColor(fullPlayer)
      return null
    }
  }
}

//Function to change color of the selected letter
function toggleLetterColor(player){
  if(document.getElementById(player).style.backgroundColor == 'coral')
    document.getElementById(player).style.backgroundColor = '';
  else
    document.getElementById(player).style.backgroundColor = 'coral';
}


  let playerOne = document.getElementById('player-one-name');

  playerOne.innerHTML = myPlayerOne;

  let playerTwo = document.getElementById('player-two-name');

  playerTwo.innerHTML = myPlayerTwo;
