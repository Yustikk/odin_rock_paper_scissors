let humanScore=0, computerScore=0;

function getComputerChoice()
{
    let a=Math.random();
    if(a<=0.33)
    {
        return "ROCK";
    }
    else if(a>=0.66)
    {
        return "PAPER";
    }
    else
    {
        return "SCISSORS";
    }
}


function PlayRound(humanChoice,machineChoice)
{
    
    
    
    console.log("You chose: "+humanChoice+"!");
    console.log("Your enemy chose: "+machineChoice+"!");

    if(humanChoice=="SCISSORS")
    {
        switch (machineChoice)
        {
            case "SCISSORS":
                console.log("DRAW!");
                break;
            case "PAPER":
                console.log("YOU WON!");
                humanScore++;
                break;
            case "ROCK":
                console.log("YOU LOST :(");
                computerScore++;
                break;
            default:
            break;
        }
    } else if( humanChoice=="ROCK")
    {
        switch (machineChoice)
        {
            case "SCISSORS":
                console.log("YOU WON!"); humanScore++;
                break;
            case "PAPER":
                console.log("YOU LOST :("); computerScore++;
                break;
            case "ROCK":
                console.log("DRAW!");
                break;
            default:
            break;
        }
    }
    else
    {
        switch (machineChoice)
        {
            case "SCISSORS":
                console.log("YOU LOST :("); computerScore++;
                break;
            case "PAPER":
                console.log("DRAW!");
                
                break;
            case "ROCK":
                console.log("YOU WON!"); humanScore++;
                break;
            default:
            break;
        }
    }

    

}

function playGame(n) {
    for(let i=0;i<n;i++)
    {
        console.log("Your score: "+humanScore);
        console.log("Enemy score: "+computerScore);
        PlayRound(getHumanChoice,getComputerChoice);
    }

    if(humanScore>computerScore)
    {
        console.log("YOU WON!");

    }else if(humanScore<computerScore)
    {
        console.log("You lost!");
    }
    else
    {
        console.log("DRAW!");
    }
}




let button
let buttons=document.querySelectorAll("button");
buttons.forEach( (button) => button.addEventListener("click",(e) => 
{
    let targett=e.target
    let choice=targett.id
    PlayRound(choice,getComputerChoice())
}

)) //why does this work and the other  doesnt ;-;

//DONT WORK
// let button
// let buttons=document.querySelectorAll("button");
// buttons.forEach( (button) => button.addEventListener("click",PlayRound(button.id,getComputerChoice)))




//WORKSSSSSSSS
// let button
// let buttons=document.querySelectorAll("button");
// buttons.forEach( (button) => button.addEventListener("click",(e) => 
// {
//     let target=e.target
//     console.log(target.id)
// }

// ))
//