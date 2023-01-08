var buttonCollor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatern =[];
var level = 0;

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPatern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    checkAnswer(userChosenColour);
    // console.log(userClickedPatern);
});

$(document).keypress(function() {
    if (level === 0){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPatern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPatern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            },1000)
        }

    } else {
        console.log("wrong");
    }
}

function nextSequence() {
    userClickedPatern = [];
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonCollor[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    $("#level-title").text("Level " + level);
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

