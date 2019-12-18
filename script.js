let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
  result_div.innerHTML = `
    ${convert(user)} beats  ${convert(comp)}  You Win! 🔥`;
}

function lose(user, comp) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
  result_div.innerHTML = `
    ${convert(user)} loses to  ${convert(comp)}  You Lost! 😔`;
}

function draw(user, comp) {
  result_div.innerHTML = `
    ${convert(user)} equals  ${convert(comp)}  It's A Draw! `;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
main();
