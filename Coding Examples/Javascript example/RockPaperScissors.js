let player = "qustion";
let enemy="question";
let wins = 0;
let loses = 0;
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
    results();
}
function results(){
    
    let result = document.getElementById("res");
    let WL = document.getElementById("WAL");
    //alert(player);
    if(player == enemy){
        //alert("test");
        result.textContent = "tie";
    }else if (player == "rock"){
        if(enemy == "paper"){
            loses +=1;
            result.textContent = "lose";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }else{
            wins +=1;
            result.textContent = "win";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }
    }else if (player == "paper"){
        if(enemy == "scissors"){
            loses +=1;
            result.textContent = "lose";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }else{
            wins +=1;
            result.textContent = "win";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }
        //alert("test2");
    }else{
        if(enemy == "rock"){
            loses +=1;
            result.textContent = "lose";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }else{
            wins +=1;
            result.textContent = "win";
            WL.textContent = "You: " + wins + ", computer: " + loses;
        }
    }
}