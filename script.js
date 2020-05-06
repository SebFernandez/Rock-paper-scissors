//Element ID's.
var playerScore = document.getElementById("player-score");
var cpuScore = document.getElementById("cpu-score");
var playerChoice = document.getElementById("decision-player");
var cpuChoice = document.getElementById("decision-cpu");
var playerRock = document.getElementById("rock-icon");
var playerPaper = document.getElementById("paper-icon");
var playerScissors = document.getElementById("scissors-icon");

//Images path.
var scissorsIcon = "Images/hand-scissors-regular.svg";
var rockIcon = "Images/hand-rock-regular.svg";
var paperIcon = "Images/hand-paper-regular.svg";

//Weapons
var playerWeapon;
var cpuWeapon;
var winnerWeapon;

//Score counter.
playerScore.textContent = 0;
cpuScore.textContent = 0;

//randomWeapon decides in a random way which weapon CPU will use.
function randomWeapon () {
    var choice = Math.round(Math.random () * 100) % 3;

    if (choice == 0) {
        cpuChoice.src = scissorsIcon;
        return 'scissors';
    } else if (choice == 1) {
        cpuChoice.src = rockIcon;
        return 'rock';
    } else if (choice == 2) {
        cpuChoice.src = paperIcon;
        return 'paper';
    }
}

//weaponPlayerAssignment assigns which weapon user has clicked.
function weaponPlayerAssignment (icon) {
    if (icon == 'rock') {
        playerChoice.src = rockIcon;
        playerWeapon = icon;
    } else if (icon == 'paper') {
        playerChoice.src = paperIcon;
        playerWeapon = icon;
    } else if (icon == 'scissors') {
        playerChoice.src = scissorsIcon;
        playerWeapon = icon;
    }
}

//checkScore resets scores to 0.
function checkScore ()  {
    if (playerScore.textContent == 5 || cpuScore.textContent == 5) {
        playerScore.textContent = 0;
        cpuScore.textContent = 0;
    }
}

//roundPlay function compares players weapon and returns the winner weapon, in case of returning 'nothing' it will be considered a tie.
function roundPlay (pWeapon, cWeapon)   {
    if ((pWeapon == 'rock' && cWeapon == 'scissors') || (pWeapon == 'scissors' && cWeapon == 'rock')) {
        return 'rock';
    }

    if ((pWeapon == 'rock' && cWeapon == 'paper') || (pWeapon == 'paper' && cWeapon == 'rock')) {
        return 'paper';
    }

    if ((pWeapon == 'scissors' && cWeapon == 'paper') || (pWeapon == 'paper' && cWeapon == 'scissors')) {
        return 'scissors';
    }

    return 'nothing'
}

//playerChoice and cpuChoice backgrounds becomes white.
function whiteBackground () {
    playerChoice.style.backgroundColor = '#ffffff'
    cpuChoice.style.backgroundColor = '#ffffff'
}

//playRound is main game.
function playRound (e) {
    checkScore();

    if (e.target.id == 'rock-icon') {
        weaponPlayerAssignment ('rock');
    }   else if (e.target.id == 'paper-icon')   {
        weaponPlayerAssignment ('paper');
    }   else if (e.target.id == 'scissors-icon')    {
        weaponPlayerAssignment ('scissors');
    }
    
    cpuWeapon = randomWeapon();
    winnerWeapon = roundPlay (playerWeapon, cpuWeapon);

    if (winnerWeapon == playerWeapon)   {
        playerScore.textContent++;
        playerChoice.style.backgroundColor = '#90ee90'
        cpuChoice.style.backgroundColor = '#f08080'
    }   else if (winnerWeapon == cpuWeapon) {
        cpuScore.textContent++;
        playerChoice.style.backgroundColor = '#f08080'
        cpuChoice.style.backgroundColor = '#90ee90'
    }   else    {
        whiteBackground ();
    }

}

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);