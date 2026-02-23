const getComputerChoice = () => {

    let rock = Math.random();
    let paper = Math.random();
    let scissor = Math.random();

    let winner = "";

    
    if(rock > paper){
        bigger = rock;
        winner = "Rock";
    } else{
        bigger = paper;
        winner = "Paper";
    }

    if(scissor > bigger)
        winner = "Scisor";

    

    return winner;

}

const getHumanChoise = () => {

    let choise = prompt("Make your choise!");

    if(choise == '' || choise == undefined)
        choise = getComputerChoice();

    return choise;

}

const playRound = (human, machine) => {

    let winner = "";

    switch(human){
        case "Rock":
            if (machine == "Paper")
                winner = "Machine";
            else if (machine == "Scissor")
                winner = "Human";
            else if(machine == "Rock")
                winner = "Draw";
        case "Paper":
            if (machine == "Paper")
                winner = "Draw";
            else if (machine == "Scissor")
                winner = "Machine";
            else if(machine == "Rock")
                winner = "Human";    
        case "Scissor":
            if (machine == "Paper")
                winner = "Human";
            else if (machine == "Scissor")
                winner = "Draw";
            else if(machine == "Rock")
                winner = "Machine";    
    }

    return winner;


}



const playGame = () => {

    let humanSelection, machineSelection, winner, humanCount, machineCount;

    humanCount = 0;
    machineCount = 0;

    for (i = 1; i <= 5; i++){

        humanSelection = getHumanChoise();
        machineSelection = getComputerChoice();

        winner = playRound(humanSelection, machineSelection);

        if(winner == "Human"){
            humanCount += 1;
            alert ("You won the round!");
        }else {
            machineCount += 1;
            alert("Machine won the round!");
        }

    }

    
    
    humanCount > machineCount ? alert("You won the game by " + humanCount + " x " + machineCount) : alert("machine won the game by " + humanCount + " x " + machineCount);

    

}


playGame();



//getComputerChoice(promt("Make your choice"));