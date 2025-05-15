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

function win()
{
    let a=document.querySelector("#Result");
    let b=document.createElement("p");
    b.innerText="YOU WON";
    b.id="won";
    b.color="green";
    a.appendChild(b);
    humanScore++;
}

function lose()
{
    let a=document.querySelector("#Result");
    let b=document.createElement("p");
    b.innerText="YOU LOST";
    b.id="won";
    b.color="red";
    a.appendChild(b);
    computerScore++;
}
function draw()
{
    let a=document.querySelector("#Result");
    let b=document.createElement("p");
    b.innerText="DRAW";
    b.id="won";
    a.appendChild(b);
}

function showScore()
{
    a=document.querySelector("#score");
    if(humanScore>computerScore)
        a.style.color="green";
    else
        a.style.color="red";
    a.innerText=`Current Score: ${humanScore} VS ${computerScore}`
}


function PlayRound(humanChoice,machineChoice)
{
    let a=document.querySelector("#Result")
    
    a.innerText=`Your enemy chose: ${machineChoice}`;
    
    
    
    
    console.log("You chose: "+humanChoice+"!");
    console.log("Your enemy chose: "+machineChoice+"!");

    if(humanChoice=="SCISSORS")
    {
        switch (machineChoice)
        {
            case "SCISSORS":
                draw()
                break;
            case "PAPER":
                win();
                break;
            case "ROCK":
                lose()
                break;
            default:
            break;
        }
    } else if( humanChoice=="ROCK")
    {
        switch (machineChoice)
        {
            case "SCISSORS":
                win();
                break;
            case "PAPER":
                lose()
                break;
            case "ROCK":
                draw()
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
                lose()
                break;
            case "PAPER":
                draw()                
                break;
            case "ROCK":
                win();
                break;
            default:
            break;
        }
    }
    showScore();
    if(humanScore==5 || computerScore==5)
    {
        showScore();
        getResult()
    }

}


function getResult()
{
    a=document.querySelector("#Result");
        a.classList.toggle="result"
         if(a) a.innerText=" ";
        if(humanScore===5)
            a.innerText="You Won!!! Congrats! press any button to start again"
        else
            a.innerText="You Lost!! :( press any button to start again"
        humanScore=0;
        computerScore=0;
    
}
//GETTING THE BUTTONS TO WORK



let buttons=document.querySelectorAll("button");
buttons.forEach( (button) => button.addEventListener("click",(e) => 
{
    buttons.forEach((button1) => button1.style.background="")
    button.style.background="gray";
    let a=document.querySelector("#won");
    if(a)
    {
        a.remove();  //thank you chat gpt gods i was complicating it so bad
        
    }
    let targett=e.target
        let choice=targett.id
    if(!(humanScore==5 || computerScore==5))
    {
        
        PlayRound(choice,getComputerChoice())
    }
    else
    {
        
        
    }

//i made a lot of logic mistakes because i was tired and frustrated, such as showing the score before its updated
//which led to the maxx score being 4, and instead of  fixing the core problem, i made the limit be 6 which broke 
//the logic even further. As such I need to learn to be patient with myself and plan out things like i normally do
//Plus i havent been committing at all!!!!

    
    
}
)) //why does this work and the other  doesnt ;-;


//another option:
// function F(buttonId) {
//       console.log("Button clicked:", buttonId); 
// const buttonIds = ["btn1", "btn2", "btn3"];

//     buttonIds.forEach(id => {
//       const button = document.getElementById(id);
//       button.addEventListener("click", function() {
//         F(id); 


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

