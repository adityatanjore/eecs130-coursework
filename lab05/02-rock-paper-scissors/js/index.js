const choices = ["rock", "paper", "scissors"];

/*
// Optional Enhancement:
const rockIcon = "<i class='fa fa-hand-rock-o'></i>";
const paperIcon = "<i class='fa fa-hand-paper-o'></i>";
const scissorsIcon = "<i class='fa fa-hand-scissors-o'></i>";
*/

const getComputerChoice = () => {
    const index = parseInt(Math.random() * 3); // picks a number between 0 and 2.
    console.log("the computer picked: " + index); // writes the number to the console

    // gets the choice stored in the "choices"
    // array at the corresponding index:
    return choices[index];

};

const playGame = () => {
    const computerChoice = getComputerChoice();
    const userChoice = document.getElementById("user_choice").value;
    console.log(computerChoice, userChoice);
    document.querySelector('.computer-choice').innerHTML = 'Computer Choice: ' + computerChoice;
    document.querySelector('.user-choice').innerHTML = 'User Choice: ' + userChoice;

    if (computerChoice === 'rock' && userChoice === 'rock') {
      document.querySelector('#output').innerHTML = 'Tie Game';
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
      document.querySelector('#output').innerHTML = 'Paper Beats Rock, User Wins';
    } else if (computerChoice === 'paper' && userChoice === 'paper') {
      document.querySelector('#output').innerHTML = 'Tie Game';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
      document.querySelector('#output').innerHTML = 'Scissors Beats Paper, User Wins';
    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
      document.querySelector('#output').innerHTML = 'Tie Game';
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
      document.querySelector('#output').innerHTML = 'Scissors Beats Paper, Computer Wins';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
      document.querySelector('#output').innerHTML = 'Rock Beats Scissors, User Wins';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
      document.querySelector('#output').innerHTML = 'Paper Beats Rock, Computer Wins Wins';
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        document.querySelector('#output').innerHTML = 'Rock Beats Scissors, Computer Wins';
    }

      // write logic to determine who wins and then output a message to
    // the #output element, using if / else statements here....


};

document.querySelector('button').onclick = playGame;
