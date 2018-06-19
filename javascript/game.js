

var counter = 0;
  
  var wins = 0;
  
  var losses = 0;

  var targetNumber = Math.floor((Math.random()*101)+19);

  $("#number-to-guess").text(targetNumber);

  // This randomizes each number to be from 1-12.

  var numberOptions = [(Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12))+1)];


for (var i = 0; i < numberOptions.length; i++) {

  var imageCrystal = $("<img>");

  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal);

  }


function reset () {
    
  window ['targetNumber'] = Math.floor((Math.random()*101)+19);
  
  $("#number-to-guess").text(targetNumber);

  window ['numberOptions'] = [(Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12))+1), (Math.floor((Math.random()*12)))];
  
  counter = 0;
  
  score = 0;

  }


  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;


    if (counter === targetNumber) {
      alert("You win!");
      reset();
      wins++;
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      reset()
      losses++;
    }

    $("#score").html(counter);

    $("#wins").html(wins);

    $("#losses").html(losses);

  });

