if(!(document.getElementById("result").html = "f")){
    document.getElementById("result").style.backgroundColor = "red";
}else{
    document.getElementById("result").style.backgroundColor = "blueviolet";
}

//Player and coputer scores at initial 0
var computerScore = 0;
var playerScore = 0;
var rps = ["rock", "paper", "scissors"];

//Random function config for computer
function computerPlay(){
    var computerChoice = rps[Math.floor(Math.random() * rps.length)];
    //computerChoice = "paper";
    return computerChoice;
}

//Computer's selection into variable computer
var computer = computerPlay()
console.log("computer chose => " + computer);


//Player's function config for prompt action
function playerplay(){
    var userInput = prompt("Choose your weapon: Rock, Paper or Scissors").toLowerCase();

    if((userInput == "rock") || (userInput == "paper") || (userInput == "scissors")){
        return userInput;
    }else{
        document.getElementById("result").innerHTML = "";
        return "Please enter Rock, Paper or Scissors";
    }
}

//Player's selection into variable userRawInput
var userInputRaw = playerplay();
console.log("player chose => " + userInputRaw);

//Show/output what each player chose
document.getElementById("playerSelection").innerHTML = userInputRaw;
document.getElementById("computerSelection").innerHTML = computer;

//Compare and return who wins
function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return "Result is par";
    }

    if(computerSelection === "rock"){
        if(playerSelection == "paper"){
            playerScore++;
            return "You win! Paper beats Rock";
        }
        else if(playerSelection == "scissors"){
            computerScore++;
            return "You lose! Rock beats scissors";
        }
    }
    else if(computerSelection == "paper"){
        if(playerSelection == "rock"){
            computerScore++
            return "You Lose! Paper beats Rock";
        }
        else if(playerSelection == "scissors"){
            playerScore++;
            return "You win! Scissors beats Paper";
        }
    }
    else if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            playerScore++;
            return "You win! Rock beats Scissors";
        } 
        else if(playerSelection == "paper"){
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
        
    }

}

//Comparison result into variable result
var result = playRound(userInputRaw, computer); 
document.getElementById("result").innerHTML = result;

console.log("Player Score => " + playerScore);
console.log("Computer Score => " + computerScore);

//Show/output what each player scores
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

//Function re-initializes each round by recalling all necessary functions again
function playerCont(){
    document.getElementById("result").style.backgroundColor = "blueviolet";

    var playerNewSelection = playerplay();
    console.log("Player rechose => " + playerNewSelection);

    var computerNewSelection = computerPlay();
    console.log("Computer rechose  => " + computerNewSelection);

    document.getElementById("playerSelection").innerHTML = playerNewSelection;
    document.getElementById("computerSelection").innerHTML = computerNewSelection;

    var newResult = playRound(playerNewSelection, computerNewSelection);
    console.log("New Result => " + newResult);
    document.getElementById("result").innerHTML = newResult;

    console.log("Player Score => " + playerScore);
    console.log("Computer Score => " + computerScore);

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    return game();
    
}
//Function determines who wins and FORCES plater to reset game
function game(){
    if(playerScore == 5){
        console.log("Hurray! Player wins" + playerScore + "playerScore" + " = " + playerScore + " and " + computerScore + "=" + computerScore);
        
        document.getElementById("submitButton").innerHTML = "Please Reset Game";
        document.getElementById("submitButton").setAttribute("onclick", "javascript: resetGame();");
        
        document.getElementById("announceWinner").innerHTML = "Player Wins!!!";
        document.getElementById("announceWinner").style.backgroundColor = "blueviolet";
    }
    else if(computerScore == 5){
        console.log("Hurray! Computer wins " + computerScore + "computerScore" +  + " = " + computerScore + " and " + playerScore + "=" + playerScore);

        document.getElementById("submitButton").innerHTML = "Please Reset Game";
        document.getElementById("submitButton").setAttribute("onclick", "javascript: resetGame();");
        
        document.getElementById("announceWinner").innerHTML = "Computer Wins!!!";
        document.getElementById("announceWinner").style.backgroundColor = "brown";

    }
}

//Resets the game
function resetGame(){
    computerScore = 0;
    playerScore = 0;
    document.getElementById("playerSelection").innerHTML = "";
    document.getElementById("computerSelection").innerHTML = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("submitButton").innerHTML = "Choose Weapon";
    document.getElementById("announceWinner").innerHTML = "";

    document.getElementById("playerScore").innerHTML = "";
    document.getElementById("computerScore").innerHTML = "";

    document.getElementById("result").style.backgroundColor = "#eaeaea";
    document.getElementById("announceWinner").style.backgroundColor = "#eaeaea";

    document.getElementById("submitButton").setAttribute("onclick", "javascript: playerCont();");
}
