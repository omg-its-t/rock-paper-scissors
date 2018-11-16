let userScore = 0;
let computerScore = 0;
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
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      console.log("user win");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("user looses");
      loose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        console.log("its a draw");
        draw(userChoice, computerChoice);
          break;
  }
}

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  //generate random num between 0-2 use as array index and return
  return choices[Math.floor(Math.random() * 3)];
}

function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${getFullWord(user)} beats ${getFullWord(computer)} you WIN!`;
}

function loose(user, computer){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${getFullWord(computer)} beats ${getFullWord(user)} you LOOSE!`;
}

function draw(user, computer){
result_div.innerHTML = `${getFullWord(user)} AND ${getFullWord(computer)} is a DRAW!`;
}

function getFullWord(letter){
  if(letter === 'r'){
    return "Rock";
  }
  if(letter === 'p'){
    return "Paper";
  }else{
    return "Scissors";
  }
}
