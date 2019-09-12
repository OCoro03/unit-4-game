var userWins = 0;
var userLoses = 0;
var crystalsPoints;
// var totalPoints;
var compChoice;
var randomOrange = 0;
var randomSaphire= 0;
var randomTeal= 0;
var randomBlue= 0;

// window.onload = function(){

// window.onload = function(){
// $("#orange").on("click", Math.floor((Math.random() * 12) + 1));
// $("#saphire").on("click", run);
// $("#teal").on("click", run);
// $("#blue").on("click", run);

// }


// Created a random number generator for numbers between 19-120 
function random(){
    compChoice = Math.floor(Math.random() * 120) + 19;
    // console.log(compChoice);
    $("#randomNumber").text(compChoice);
}
random();
 

// This function controls what the crystals will use to generate their random numbers
 
   function run(){
        randomOrange = Math.floor((Math.random() * 12) + 1);
        randomSaphire = Math.floor((Math.random() * 12) + 1);
        randomTeal = Math.floor((Math.random() * 12) + 1);
        randomBlue = Math.floor((Math.random() * 12) + 1);
// crystalsPoints = Math.floor(Math.random() * 12) + 1;
console.log(randomOrange);

}
run();

function addingToScore(crystalNumber){
    crystalsPoints = crystalsPoints + crystalNumber;
 }


$("#orange").on("click", function(){
    addingToScore(randomOrange);
    $("#yourScore").text(crystalsPoints);
   checkScore(); 
})


// Keep the score updated
function score(crystalNumber){
    crystalsPoints = crystalsPoints + crystalNumber;
}
score()

var checkScore = function(){
    if (crystalsPoints === compChoice){
        resetAll();
        userWins++;
        $("#win").text(userWins);
    } else if (crystalsPoints > compChoice){
        resetAll();
        userLoses++;
        $("#lose").text(userLoses);
    }
}