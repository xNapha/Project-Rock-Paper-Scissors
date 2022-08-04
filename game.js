/* 
User input
-create a function that accepts the users input

Computer output
-create a function that chooses either rock paper or scissors

Compare and return results
-create a function that compares the two values and returns the winner

best out of 5 wins
- create a function that counters the total number of wins and rounds to see who wins overall
*/
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
const resultsText = document.querySelector("#resultsText");
let choice = "";
let userWins = 0, computerWins = 0;

function computerChoice(){
    let option = ["rock", "paper" , "scissors"]
    let x = Math.floor(Math.random()*3)
    if (x == 3){
        x--
    }
  ;
    return option[x];
};

function game(){
    userScore.textContent = userWins;
    computerScore.textContent= computerWins;
    let rounds = playRound(choice,computerChoice());
    if(rounds == "Win"){
        userWins+=1;
        userScore.textContent = userWins;
    } else if (rounds =="Lose"){
        computerWins+=1;
        computerScore.textContent= computerWins;
    };
    if(userWins == 5){
        userWins = 0;
        computerWins = 0;
        resultsText.textContent = "Congratulations you won!"
    } else if(computerWins == 5){
        userWins = 0;
        computerWins = 0;
        resultsText.textContent = "Too bad. Try again next time"
    };
};

function computerChoice(){
    let option = ["rock", "paper" , "scissors"]
    let x = Math.floor(Math.random()*3)
    if (x == 3){
        x--
    };
    return option[x];
};

function playRound(user, computer){
    if (user == computer){
        resultsText.textContent = "The computer went " + computer;
        return;
    } else if(user == "rock" && computer == "scissors"){
        resultsText.textContent = "The computer went " + computer;
        return "Win";
    } else if(user == "paper" && computer == "rock"){
        resultsText.textContent = "The computer went " + computer;
        return "Win";
    } else if(user == "scissors" && computer == "paper"){
        resultsText.textContent = "The computer went " + computer;
        return "Win";
    } else{
        resultsText.textContent = "The computer went " + computer;
        return "Lose";
    };
};

rock.addEventListener("click", function(){
    choice = "rock"
    game();

});
paper.addEventListener("click", function(){
    choice = "paper"
    game();

});
scissors.addEventListener("click", function(){
    choice = "scissors"
    game();

});

