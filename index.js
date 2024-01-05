var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//for drum clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /*var key = document.querySelectorAll(".drum")[i].textContent();
    alert("I clicked " + this);
    */
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//for keyboard keys
addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      var meow = new Audio("sounds/cat.wav");
      meow.play();
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 350);
}

//TODO: ADD MOUSE OVER TO ATKINSONS LINK FOR CAT SOUND
// document
//   .querySelectorAll("a")[0]
//   .addEventListener("mouseover", function () {
//     var meow = new Audio("sounds/cat.wav");
//     meow.play();
//   });

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
