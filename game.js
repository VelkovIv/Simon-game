var buttonCollor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatern =[];
var level = 0;

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPatern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    // console.log(userClickedPatern);
})

$(document).keypress(function() {
    if (level === 0){
        nextSequence();
    }
})

function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonCollor[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    $("h1").text("Level " + level);
    level++;
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