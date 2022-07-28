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
function userChoice(){
    return (prompt("Rock, Paper or Scissors?")).toLowerCase();
};
function computerChoice(){
    let option = ["rock", "paper" , "scissors"]
    let x = Math.floor(Math.random()*3)
    if (x == 3){
        x--
    }
  ;
    return option[x];
};

function playRound(user, computer){
    if (user == computer){
        console.log("The computer went " + computer)
        console.log("It's a draw")
        return "Draw";
    } else if(user == "rock" && computer == "scissors"){
        console.log("The computer went " + computer)
        console.log("You win")
        return "Win";
    } else if(user == "paper" && computer == "rock"){
        console.log("The computer went " + computer)
        console.log("You win") 
        return "Win";
    } else if(user == "scissors" && computer == "paper"){
        console.log("The computer went " + computer)
        console.log("You win")
        return "Win";
    } else{
        console.log("The computer went " + computer)
        console.log("You lose");
        return "Lose";
    };
};

let userWins = 0, computerWins = 0;
function game(counter){
    let score  = "User: " + userWins + " Computer: " + computerWins;

    if (counter == 0){
        console.log(score);
        return console.log(score);
    }
    let rounds = playRound(userChoice(),computerChoice());
    if (rounds == "Draw"){
        counter += 1;
    } else if(rounds == "Win"){
        userWins +=1;
    } else if (rounds =="Lose"){
        computerWins +=1;
    }
    return game(counter-1)
    
};

game(5) ;

