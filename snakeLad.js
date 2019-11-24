const players =
 [{name:"Player 1",
  position: 0},
  {name:"Player 2",
  position: 0}];

let currentPlayerTurn = 0;

function initGame()
{
    window.location.reload();
}

function nextMove(){

var status=document.getElementById("status");
var current=document.getElementById("currentPosition");
var x= Math.floor(Math.random()*6)+1;
let currentPlayer = players[currentPlayerTurn];
status.innerHTML= currentPlayer.name + " rolled " + x +".";

currentPlayer.position += x;

  switch (currentPlayer.position)
  {
  //ladder
  case 8:
  currentPlayer.position = 15
  alert(currentPlayer.name +" stepped on ladder. Climb to 15!");
  break;
  //ladder
  case 19:
  currentPlayer.position = 24;
  alert(currentPlayer.name +" stepped on ladder. Climb to 24!");
  break;
  //snake
  case 15:
  currentPlayer.position = 5;
  alert(currentPlayer.name +" stepped on snake! Go down to 5");
  break;
  //snake
  case 23:
  currentPlayer.position = 15;
    alert(currentPlayer.name + " stepped on snake! Go down to 16");
  break;
  }

current.innerHTML="Your current position is " + currentPlayer.position + ".";
  if (currentPlayer.position >= 25)
  {
      alert("Congratulations, " + currentPlayer.name+ " has won the game!");
      initGame();
    }
    currentPlayerTurn ++;
    console.log("Player 2 turn");
    if (currentPlayerTurn >= players.length) {
      currentPlayerTurn = 0;
    console.log("Player 1 turn");
    }
}
