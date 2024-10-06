function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const stringToInteger = {
  rock: 0,
  paper: 1,
  scissors: 2
};

function handleClick(event) {
  const id = event.target.id;

  if (id in stringToInteger)
    playRound(stringToInteger[id], getComputerChoice());

  if (humanScore >= 5 || computerScore >= 5) {
    ul.removeEventListener('click', handleClick);

    const para = document.createElement('p');

    if (humanScore >= 5)
      para.textContent = 'You win! Congratulations!';
    else
      para.textContent = 'You lose! Better luck next time…';

    output.appendChild(para);
  }
}

const ul = document.querySelector('ul');

ul.addEventListener('click', handleClick);

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
