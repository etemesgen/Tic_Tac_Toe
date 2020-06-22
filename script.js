// DEFINE USEFUL VARIABLES

var detectValue;
const player1 = "X";
const player2 = "O";

const winningPossibilities = [
    [0, 1, 2]
    [0, 3, 6],
    [2, 5, 8], 
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
];

// SELECT CELL ELEMENTS

const cells = document.querySelectorAll('.cell');

// SET THE START GAME FUNCTION

function startGame(){
    document.querySelector(".endgame").style.display = "none";  // Erases the endgame text when game startes
    detectValue = Array.from(Array(9).keys());            // Defines the values of each cell 
    for(var i = 0; i < cells.length; i++){
        cells[i].innerText = "";                        // Erases values when game ends 
        cells[i].style.removeProperty('backgroundcolor');      // Erases the winning combo background color when game ends
        cells[i].addEventListener('click', turnClick, false);  // When cells clicked turnClick function runs
    }
}

startGame();

// SET THE CLICK FUNCTION HELPING TO TARGET THE CELLS

function turnClick(square){            // Function which helps to know the cells value when clicked  
    turn(square.target.id, player1);   // Calling turn function or the player who clicks
}

// SET THE TURN FUNCTION TO LET PLAYERS CLICK ON CELLS

function turn(squareId, player){
     detectValue[squareId] = player;
     document.getElementById(squareId).innerText = player;
     let gameWon = checkWin(detectValue, player);  // A variable letting know who wins the round
      if(gameWon) gameOver(gameWon)
}

// SET THE CHECK WIN FUNCTION TO CHECK WHO ACTUALLY WON

function checkWin(detect, player){
     let plays = detect.reduce((a, e, i) => 
      (e === player) ? a.concat(i) : a, []);
      let gameWon = null;
      for(let [index, win] of winningPossibilities.entries()){
          if(win.every(elem => plays.indexOf(elem > -1))){
            gameWon = {index: index, player: player};
            break;
          }
        }
          return gameWon;
    }

// SET THE GAME OVER FUNCTION TO END THE GAME

function gameOver(gameWon){
  for(let index of winningPossibilities[gameWon.index]){}
}

