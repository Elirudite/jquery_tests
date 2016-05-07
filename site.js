// site.js

// var x = prompt("Are you ready for this?");

// if(x == 'yes' || x == 'y' || x == 'Yes' || x == 'YES'){

	$("#green-circle").hover(function (){
		$("#changeling").html("We've changed the text!");
	});

	$(".red-square").click(function (){
		$(this).css('background-color', 'blue');
	});

	$(".red-square").hover(function (){
		$(this).css('width', 400);
	});

// } else {
// 	$("body").html("<h1>THEN YOU GET NOTHING!</h1>");
// }

$(function() {
	$('.draggable').draggable();
})


$('canvas#first')
.drawArc({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#36c',
  x: 150, y: 150,
  radius: 50
})
.drawRect({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#6c1',
  x: 100, y: 100,
  width: 100, height: 100
});

// Add rectangle layer w/o drawing
$('#second').addLayer({
  type: 'rectangle',
  draggable: true,
  fillStyle: '#fff',
  strokeStyle: '#c33',
  strokeWidth: 2,
  x: 160, y: 150,
  width: 150, height: 80,
  handlePlacement: 'both',
  handle: {
    type: 'arc',
    fillStyle: '#fff',
    strokeStyle: '#c33',
    strokeWidth: 2,
    radius: 10
  },
  handlestart: function(layer) {
    // code to run when resizing starts
  },
  handlemove: function(layer) {
    // code to run while resizing
  },
  handlestop: function(layer) {
    // code to run while resizing stops
  }
})
.drawLayers();

// w3 schools solution
function createShape() {
	var elmnt = document.getElementsByTagName("DIV")[2];
	var cln = elmnt.cloneNode(true);
	document.body.appendChild(cln);
	cln = '.draggable'
}

// Tried to create a function myself, failed...
// $("button").click(function(){
// 	$("#spawnCreator")
// })
// function createShape() {
// 	var node = document.createElement("DIV");
// 	var shape = document.getElementById("#shape1");
// 	document.body.appendChild(shape);
// } 




// var rpsChoice = Math.floor((Math.random() * 3) + 1)

// function compChoice() {

// }

// function rpsChoice() {
// 	var rps = Math.floor((Math.random() * 3) + 1);
// 	document.getElementById("rpsShoot").innerHTML = rps;
// 	if (rps == 1) { return "Rock"};
// 	if (rps == 2) { return "Paper"};
// 	if (rps == 3) { return "Scissors"};
// }

// var rock = 1
// var paper = 2
// var scissors = 3

// The bellow switch statement worked... but I want to use the rpsComp variable to determine
//the results in another function/part... so I have to figure out 'closures' or something
// var rpsComp = (function rpsChoice() { 
// 		switch (Math.floor((Math.random() * 3) + 1)) {
// 			case 1:
// 				rpsComp = "rock";
// 				break;
// 			case 2:
// 				rpsComp = "paper";
// 				break;
// 			case 3:
// 				rpsComp = "scissors";
// 				break;
// 		});
// 	document.getElementById("rps_shoot").innerHTML = "The Computer chose " + rpsComp + "!";
// };

// rpsChoice();

// function userChoice() {
// 	var playerChoice = prompt("Your turn; pick rock, paper, or scissors?");
		// switch(playerChoice) {
		// 	case "rock":
		// 		return "You chose rock!";
		// 		break;
		// 	case "paper":
		// 		return "You chose paper!";
		// 		break;
		// 	case "scissors":
		// 		return "You chose scissors!";
		// 		break;
		// 	default:
		// 	 	return "That's not an option!";
		// }
// }
	
	// if (rpsComp == "rock" && playerChoice == "paper") {
	// 	return "You win!";
	// }
	// else if (rpsComp == "rock" && playerChoice == "scissors") {
	// 	return "You lose!";
	// }
	// else if (rpsComp == "paper" && playerChoice == "rock") {
	// 	return "You lose!";
	// }
	// else if (rpsComp == "paper" && playerChoice == "scissors") {
	// 	return "You win!";
	// }
	// else if (rpsComp == "scissors" && playerChoice == "rock") {
	// 	return "You win!";
	// }
	// else if (rpsComp == "scissors" && playerChoice == "paper") {
	// 	return "You lose!";
	// }
	// else if (rpsComp == playerChoice) {
	// 	return "Its a tie!";
	// }
	// document.getElementById("results").innerHTML = rpsComp;

// console.log rpsComp;