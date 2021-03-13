let dice = [];
let diceHeld = [];
let counter = 0;
let container;
let humanPoints = 0;
let cowPoints = 0;
let chickenPoints = 0;

$(document).ready(function() {

    $("#reroll").click(reroll);
    $("#endTurn").click(endTurn);

    container = $("div#dice");
    container.css("grid-template-columns", "repeat(" + dice.length + " , 1fr)");

    scoreHumans();
    scoreChickens();
    scoreCows();
})

function getRandomDieFace(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function createDieObject(index){
    let face = getRandomDieFace()
    let held = true;
    let diceObject = {Face:face, Held:held, toggleHeld};
    dice.push(diceObject);

}
function sortDice(a,b){
    if (a.held < b.held)
        return -1;
    else if (a.held > b.held)
        return 1;
    else {
        if(a.face < b.face)
            return -1;
        else if (a.face > b.face)
            return 1;
        else
            return 0;
    }
}
function rollAllDice(){
    for(let i = 13; i >= 0; i--) {
        createDieObject();
    }
}
function drawDie(index){
    let die = $("<div click-index="+counter+">");
    die.html(counter);
    die.click(toggleHeld);
    container.append(die);
}
function drawAllDice(){
    for(let i = dice.length; i >= 0; i--) {
        drawDie();
    }
}
function toggleHeld(){
    const clickedDice = $(this);
    clickedDice.addClass("held");
}
function startTurn(){

}
function lost(){

}
function endTurn(){

}
function reroll(){

}
function endGame(){
    $("button").hide();
    let finalScore = humanPoints + cowPoints + chickenPoints;
}
function scoreHumans(){
    let humanPoints = 0;
    $("#humansPoints").html(humanPoints);
}
function scoreCows(){
    let cowPoints = 0;
    $("#cowsPoints").html(cowPoints);
}
function scoreChickens(){
    let chickenPoints = 0;
    $("#chickensPoints").html(chickenPoints);
}