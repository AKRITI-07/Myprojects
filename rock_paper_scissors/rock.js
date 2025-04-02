

let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>
{
    console.log("game was draw");
    msg.innerText="draw";
    msg.style.backgroundColor="orange";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!!");
        msg.innerText="you win!!";
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("computer wins!");
        msg.innerText="you lose:(";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>
{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
    if(userchoice==compchoice)
    {
        drawgame();

    }
    else
    {
        let userwin=true;
        if(userchoice=="rock")
        {
            userwin=compchoice==="paper" ? false : true;
        }
        else if(userchoice=="paper")
            
            {
                userwin=compchoice==="scissors" ? false : true;
            }else
            {
            userwin=compchoice==="rock" ? false : true;
            }
            showwinner(userwin,userchoice,compchoice);
    }
    };


choices.forEach((choice) =>
    {
        
        choice.addEventListener("click",()=>{
            const userchoice=choice.getAttribute("id");
            console.log("clicked");
            playgame(userchoice)
        });
    });