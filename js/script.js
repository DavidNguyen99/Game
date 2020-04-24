var randomNumber;
var count = 0;
blockGuess();
blockGuessBtn();
// Check the number is correct?
function guess() {
  var myNumber = document.getElementById("number-you-guess").value;
  var maxNumber = document.getElementById("maxNumber").value;
  count++;
  myNumber = parseInt(myNumber);
  maxNumber = parseInt(maxNumber);
  if (myNumber < 0 || myNumber > maxNumber) {
    showResult(false, `YOUR NUMBER IS OUT OF RANGE!`);
    return;
  }
  //validate input
  if (myNumber === "") {
    alert("Please enter values");
    return;
  } else checkNumber(myNumber, randomNumber);

  //round to two decimal places

  //Display the tip

  //showResult(true, "Hello world")
}

//Generate Random Number
function genRandomNumber(maxNumber) {
  randomNumber = Math.round(maxNumber * Math.random());
  return randomNumber;
}

function showResult(win, resultMsg) {
  if (win) {
    document.getElementById("result").className = "win";
  } else {
    document.getElementById("result").className = "";
  }
  document.getElementById("result").style.display = "block";
  document.getElementById("tip").innerHTML = resultMsg;
}

//Hide the tip amount on load
document.getElementById("result").style.display = "none";
//click to call function
document.getElementById("guess").onclick = function () {
  guess();
};
document.getElementById("start").onclick = function () {
  start();
};
document.getElementById("reset").onclick = function () {
  reset();
};

function start() {
  var maxNumber = document.getElementById("maxNumber").value;
  genRandomNumber(maxNumber);
  count = 0;
  blockLevel();
  blockStartBtn();
  unBlockGuess();
  unBlockGuessBtn();
}

function checkNumber(myNumber, randomNumber) {
  if (myNumber != randomNumber) {
    if (myNumber < randomNumber) {
      showResult(
        false,
        `Please enter higher number!
try count: ${count}`
      );
    }
    if (myNumber > randomNumber) {
      showResult(
        false,
        `Please enter lower number!
try count: ${count}`
      );
    }
  }
  if (myNumber == randomNumber) {
    showResult(
      true,
      `Congratulation!
try count: ${count}`
    );
    $('audio#win')[0].play();
    unBlockLevel();
    unBlockStartBtn();
    blockGuess();
    blockGuessBtn();
  }

}

function blockLevel() {
  document.getElementById("maxNumber").disabled = true;
}

function unBlockLevel() {
  document.getElementById("maxNumber").disabled = false;
}
function blockStartBtn() {
  document.getElementById("start").disabled = true;
}
function unBlockStartBtn() {
  document.getElementById("start").disabled = false;
}

function blockGuess() {
  document.getElementById("number-you-guess").disabled = true;
}

function unBlockGuess() {
  document.getElementById("number-you-guess").disabled = false;
}

function blockGuessBtn() {
  document.getElementById("guess").disabled = true;
}

function unBlockGuessBtn() {
  document.getElementById("guess").disabled = false;
}

function reset() {
  unBlockLevel();
  unBlockStartBtn();
  blockGuess();
  blockGuessBtn();
}


$(document).ready(function() {
  //background music
    $("#background-audio").get(0).play();
    $("#background-audio").prop("volume", 0).animate({volume: 0.4}, 6000);
  //hover effect
    $('button').hover(function() {
      $("#hover-audio").get(0).play();
      $("#hover-audio").animate({volume: .5}, 150);
      $("#background-audio").animate({volume: 0.3}, 150);
      $(this).animate({opacity: .3}, 150);
    }, function() {
        $("#hover-audio").animate({volume: .5}, 250);
        $("#background-audio").animate({volume: 0.1}, 150);
        $(this).animate({opacity: 1}, 150);
    });
  //click effect
    $('button').click(function() {
      $("#click-audio").delay(50).get(0).play();
    });
});
