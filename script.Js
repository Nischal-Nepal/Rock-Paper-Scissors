let userScore = 0;
let ComScore = 0;

const chose = document.querySelectorAll("#choses");
const msgPara = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const ComScorePara = document.querySelector("#computer-score"); 


       chose.forEach( (choses) => {
       choses.addEventListener("click" , ( ) => { 
        const userChoice = choses.getAttribute("class");
          PlayGame(userChoice);

       });
});

//randam choices generate
const PlayGame = (userChoice) => {

     const compChoice = genComChoice();

     if( userChoice === compChoice ){
        //darw game
        drawGame();

     }else {
        let userWin = true;
        
        if( userChoice === "paper"){
         //rock, scissors
         userWin = compChoice === "scissors" ? false : true;

        }else if ( userChoice === "rock"){
         //scissors, paper
        userWin  = compChoice === "paper" ? false : true;
        }else{
         //rock, paper
         userWin = compChoice === "rock" ? false : true;

        }

        ShowWinner(userWin, userChoice, compChoice);

     }
   
};

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randamIdx = Math.floor(Math.random() * 3 );

    return options[randamIdx];

};


const drawGame = () => {
     console.log("Game was draw!");
     msgPara.innerText = "Game Was Draw! Play again. ";
     msgPara.style.backgroundColor = "";
};

const ShowWinner = (userWin , userChoice, compChoice) => {

        if(userWin){
         userScore++;
         userScorepara.innerText = userScore;
         msgPara.innerText = `congratulation You win! your ${userChoice} beats ${compChoice} `;
         msgPara.style.backgroundColor = "green";

        }else{
         ComScore++;
         ComScorePara.innerText = ComScore;
         msgPara.innerText = `You Lose ! ${userChoice} beats your ${compChoice}`;
         msgPara.style.backgroundColor = "red";
        }
}