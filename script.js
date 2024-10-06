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

const output = document.querySelector('#output');

let humanScore = 0;
let computerScore = 0;

const integerToString = ['Rock', 'Paper', 'Scissors'];

function playRound(humanChoiceInt, computerChoiceInt) {
  const humanChoiceStr = integerToString[humanChoiceInt];
  const computerChoiceStr = integerToString[computerChoiceInt];

  const para = document.createElement('p');

  if (humanChoiceInt === computerChoiceInt) {
    para.textContent = `Draw! ${humanChoiceStr} and ${computerChoiceStr} draw.`;
  } else if ((computerChoiceInt + 1) % integerToString.length === humanChoiceInt) {
    para.textContent = `You win! ${humanChoiceStr} beats ${computerChoiceStr}.`;
    ++humanScore;
  } else {
    para.textContent = `You lose! ${computerChoiceStr} beats ${humanChoiceStr}.`;
    ++computerScore;
  }

  para.textContent += ` Player = ${humanScore}, Computer = ${computerScore}`;
  output.appendChild(para);
}
