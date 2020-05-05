//Element ID's.
var playerScore = document.getElementById ("player-score");
var cpuScore = document.getElementById ("cpu-score");
var playerChoice = document.getElementById ("decision-player");
var cpuChoice = document.getElementById ("decision-cpu");
var playerRock = document.getElementById ("rock-icon");
var playerPaper = document.getElementById("paper-icon");
var playerScissors = document.getElementById("scissors-icon");

//Images path.
var scissorsIcon = "Images/hand-scissors-regular.svg";
var rockIcon = "Images/hand-rock-regular.svg";
var paperIcon = "Images/hand-paper-regular.svg";

//Weapons
var playerWeapon;
var cpuWeapon;

//Score counter.
playerScore.textContent = 0;    
cpuScore.textContent = 0;

function randomWeapon ()    {
    var choice = Math.round(Math.random () * 100) % 3;

    if (choice == 0)    {
        return 'scissors';
    }   else if (choice == 1)   {
        return 'rock';
    }   else if (choice == 2)   {
        return 'paper';
    }
}

cpuWeapon = randomWeapon ();
