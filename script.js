console.log('Hello, world!');

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const stringToInteger = {
  rock: 0,
  paper: 1,
  scissors: 2
};

function getHumanChoice() {
  let choice;

  do {
    choice = prompt('Enter your choice (rock/paper/scissors):').toLowerCase();
  } while (!(choice in stringToInteger));

  return stringToInteger[choice];
}
