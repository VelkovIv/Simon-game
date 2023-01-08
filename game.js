var buttonCollor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatern =[];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPatern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    // console.log(userClickedPatern);
})


function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonCollor[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatedPress(currentColour) {
    var pressedButton = $("#" + currentColour);
    pressedButton.addClass("pressed")

    setTimeout(function() {
        pressedButton.removeClass("pressed");
    }, 100) 
}