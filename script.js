const choices =["paper" , "rock" , "scissor"];
let humanscore = 0 , computerscore = 0;
// let a = prompt("enter your first choice : rock paper scissor");
// let b = prompt("enter your second choice : rock paper scissor");
// while((a !== choices.choice1 && a !== choices.choice2 && a !== choices.choice2) ||  (b !== choices.choice1 && b !== choices.choice2 && b !== choices.choice2)){
//     alert("wrong choice , please chose : rock , paper , scissor");
//     a = prompt("enter your first choice : rock paper scissor");
//     b = prompt("enter your second choice : rock paper scissor");
// }


// function getComputerChoice(a , b){

// }


function getComputerChoice(){
        let x = Math.random();  
        let computer = parseInt((x*3));
        return choices[computer];
}
function getHumanChoice(){
    let a = prompt("enter : rock , paper , scissor");
    a = a.toLowerCase();
    return a;
}


function playRound(a , b){
    if(a === "paper"){
        if(b === "rock"){
            return a;
        }
        else if(b === "scissor"){
          return b;
        }
        else{
            return a;
        }
    }
    else if(a === "rock"){
        if(b === "rock"){
            return a;
        }
        else if(b === "scissor"){
           return a;
        }
        else{
            return b;
        }
    }
    else {
        if(b === "rock"){
            return b
        }
        else if(b === "scissor"){
           return a;
        }
        else{
           return a;
        }
    }
}


function playGame(){
    for(var i = 0 ; i < 5 ; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        console.log("human choice : "+ human);
        console.log("compter choice : "+computer);
        if(human === computer){humanscore++;computerscore++;}
        else if (playRound(human , computer) === human)humanscore++;
        else computerscore++;
        console.log(`round ${i+1}  human score : ${humanscore} and computer score is : ${computerscore} ` );
    }
}
playGame();
console.log(`humanscore is : ${humanscore} and computerscore is : ${computerscore}`);
// for(var i = 0 ; i < 15 ; i++)console.log(getComputerChoice());
