let player = "qustion";
let enemy="question";
let wins = 0;
let loses = 0;
let ties = 0;
//let result = document.getElementById("res");
function setRock(){
    player="rock";
    setValue();
}
function setPaper(){
    player="paper";
    setValue();
}
function setScissors(){
    player="scissors";
    setValue();
}
function setValue(){
    //alert(getRandomInt(2));
    let r = Math.random();
    if(r <= 0.3){
        enemy ="rock";
    } else if(r <= 0.6){
        enemy ="paper";
    }else{
        enemy ="scissors";
    }
    document.getElementById("eImg").src="images/" + enemy+ ".png";
    document.getElementById("PImg").src="images/" + player+ ".png";
    results();
}
function results(){
    
    let result = document.getElementById("res");
    let WL = document.getElementById("WAL");
    //alert(player);
    if(player == enemy){
        //alert("test");
        ties +=1;
        document.getElementById("RImg").src="images/Tie.jpg";
    }else if (player == "rock"){
        if(enemy == "paper"){
            loses +=1;
            document.getElementById("RImg").src="images/Lose.jpg";
        }else{
            wins +=1;
            document.getElementById("RImg").src="images/Win2.jpg";
        }
    }else if (player == "paper"){
        if(enemy == "scissors"){
            loses +=1;
            document.getElementById("RImg").src="images/Lose.jpg";
        }else{
            wins +=1;
            document.getElementById("RImg").src="images/Win2.jpg";
        }
        //alert("test2");
    }else{
        if(enemy == "rock"){
            loses +=1;
            document.getElementById("RImg").src="images/Lose.jpg";
            
        }else{
            wins +=1;
            document.getElementById("RImg").src="images/Win2.jpg";
        }
    }
    WL.textContent ="Wins: " + wins + " loses: " + loses + " Ties: " + ties;
}