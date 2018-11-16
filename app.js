const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

function game(userChoice){
  var computerChoice = getComputerChoice();
  console.log(computerChoice + " " + userChoice);
}

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  //generate random num between 0-2 use as array index and return
  return choices[Math.floor(Math.random() * 3)];
}
