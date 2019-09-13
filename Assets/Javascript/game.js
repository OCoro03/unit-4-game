// My variables
var userWins = 0;
var userLoses = 0;
var randomOrange = 0;
var randomSaphire = 0;
var randomTeal= 0;
var randomBlue= 0;
var userScore ;
var crystalsPoints = 0;
var compChoice;

// Created my reset function
function compChoice() {
    // resetAll();
    // random();
//     crystalsPoints = 0;

//     $("#totalNumber").text(crystalsPoints);
//     $("#randomNumber").text(compChoice);
// }
}
function resetAll(){
    random();
    // userScore();
    // crystalsPoints();
}

// Created a random number generator for numbers between 19-120 
function random(){
    compChoice = Math.floor(Math.random() * 120) + 19;
    // console.log(compChoice);
    $("#randomNumber").text(compChoice);
}
random();

// Paul's inputs*
// function updateDisplay() {
//     $("#randomNumber").text("Your target is: " + compChoice);
//     $("#yourScore").text("Your Score: " + userScore);
//     $("#win").text("Wins: " + userWins);
//     $("#lose").text("Loses: " + userLoses);
//     }
 
//     $(".stone").on("click", function() {
//         var addScore = $(this).val();
//         userScore += addScore;
//         updateDisplay();
//         })

// This function controls what the crystals will use to generate their random numbers
 
   function run(){
        randomOrange = Math.floor((Math.random() * 12) + 1);
        randomSaphire = Math.floor((Math.random() * 12) + 1);
        randomTeal = Math.floor((Math.random() * 12) + 1);
        randomBlue = Math.floor((Math.random() * 12) + 1);

        console.log(randomOrange);
        console.log(randomSaphire);
        console.log(randomTeal);
        console.log(randomBlue);

    }
    run();

function addingToScore(crystalNumber){
    console.log("CP before we add the crystalNumber " + crystalsPoints)
    crystalsPoints = crystalsPoints + crystalNumber;
    console.log("CP after we add the crystalNumber " + crystalsPoints)

 }

// give me a sec
$("#orange").on("click", function(){
    addingToScore(randomOrange);
    $("#yourScore").text(crystalsPoints);
   checkScore(); 
})
$("#saphire").on("click", function(){
    addingToScore(randomSaphire);
    $("#yourScore").text(crystalsPoints);
   checkScore(); 
})
$("#teal").on("click", function(){
    addingToScore(randomTeal);
    $("#yourScore").text(crystalsPoints);
   checkScore(); 
})
$("#blue").on("click", function(){
    addingToScore(randomBlue);
    $("#yourScore").text(crystalsPoints);
   checkScore(); 
})

// Keep the score updated
// function score(crystalNumber){
//     crystalsPoints = crystalsPoints + crystalNumber;
// }
// score()


var checkScore = function(){
    if (crystalsPoints === compChoice){
        alert("You Win!") 
        userWins++;
        resetAll();
        $("#win").text("Wins: " + userWins);

    } else if (crystalsPoints > compChoice){
        alert("You Lose! Better Luck Next Time")
        userLoses++;
        resetAll();
        $("#lose").text("Loses: " + userLoses);
    }
} 