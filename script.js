function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const stringToInteger = {
  rock: 0,
  paper: 1,
  scissors: 2
};

const buttons = document.querySelectorAll('button');

buttons.forEach(button =>
  button.addEventListener('click', () =>
    playRound(stringToInteger[button.id], getComputerChoice())
  )
);

let humanScore = 0;
let computerScore = 0;

const integerToString = ['Rock', 'Paper', 'Scissors'];

function playRound(humanChoiceInt, computerChoiceInt) {
  const humanChoiceStr = integerToString[humanChoiceInt];
  const computerChoiceStr = integerToString[computerChoiceInt];

  if (humanChoiceInt === computerChoiceInt) {
    console.log(`Draw! ${humanChoiceStr} and ${computerChoiceStr} draw.`);
  } else if ((computerChoiceInt + 1) % integerToString.length === humanChoiceInt) {
    console.log(`You win! ${humanChoiceStr} beats ${computerChoiceStr}.`);
    ++humanScore;
  } else {
    console.log(`You lose! ${computerChoiceStr} beats ${humanChoiceStr}.`);
    ++computerScore;
  }
}
