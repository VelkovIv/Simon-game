var buttonCollor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatern =[];


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
})
userClickedPatern = userClickedPatern.push(userChosenColour);
console.log(userClickedPatern)


function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonCollor[randomNumber];
    
    gamePattern = gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}