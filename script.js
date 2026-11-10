
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    
    msg.innerText = "It's a draw!";

};
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
       userScore++;
       userScorepara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);

    // Generate computer choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice", computerChoice);
    if(userChoice === computerChoice) {
        //draw 
    drawGame();
} else {
    let userWin = true;
    if (userChoice === "rock") {
        // scissors paper
        userWin = computerChoice === "paper" ? false : true;
} else if (userChoice === "paper") {
//rock, scissors
userWin = computerChoice === "scissors" ? false : true;
} else {

//rock, paper
userWin = computerChoice === "rock" ? false : true;
}
showWinner (userWin, userChoice, computerChoice);
}
};

    


choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});
