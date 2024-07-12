// function doit(id){

//     let target = document.getElementById(id);
//     console.log(target.id);
// }



const choices =["paper" , "rock" , "scissor"];
let humanscore = document.getElementById('humanresult') , computerscore =document.getElementById('computerresult');


function playRound(a , b){
    if(a === "paper"){
        if(b === "rock"){
            return a;
        }
        else if(b === "scissor"){
          return b;
        }
        else{
            return "draw";
        }
    }
    else if(a === "rock"){
        if(b === "rock"){
            return "draw";
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
            return b;
        }
        else if(b === "scissor"){
           return "draw";
        }
        else{
           return a;
        }
    }
}
function playerSelection(){
    const plays = document.querySelectorAll('input[name="choice"]');
    for(let p of plays){
        if(p.checked)
        console.log(p.id);
    }
}

function getComputerChoice(){
        let x = Math.random();  
        let computer = parseInt((x*3));
        console.log("computer choice is : " + choices[computer]);
        return choices[computer];
        
}

function playnow(){
    let cc = getComputerChoice();
    let hc = playerSelection();
    //console.log(cc , hc);
    let result  = playRound(hc , cc);
    if(result === "draw"){
        humanscore.value = parseInt(humanscore.value) +1;
        computerscore.value = parseInt(computerscore.value) +1;
    }
    else if(result == hc)humanscore.value = parseInt(humanscore.value) +1;
    else
    computerscore.value = parseInt(computerscore.value) +1;
    if(humanscore == computerscore == 5){
        alert("draaaaaaaaaaaaaaaaaw");
        computerscore.value  = "0";
        humanscore.value = "0";
    }
    else if(humanscore.value == 5 ){
        alert("HUMAN WIIIIIIINS !!!!!!!!!!");
        computerscore.value  = "0";
        humanscore.value = "0";
    }
    else if(computerscore.value == 5){
        alert("COMPUTER TAKE OVER THE WORLD !!!!!! COMPUTER WINS");
        computerscore.value  = "0";
        humanscore.value = "0";
    }
}








