document.addEventListener('scroll',function(){
var scrollPosition = window.pageYOffset;
document.querySelector('.parallax-image').style.transform = 'translateY('+scrollPosition * 0.5 + 'px)';
})

document.addEventListener('scroll',function(){
var scrollPosition2 = window.pageYOffset;
document.querySelector('.parallax-image2').style.transform = 'translateY('+scrollPosition2 * 0.5 + 'px)';
})

document.addEventListener('scroll',function(){
var scrollPosition3 = window.pageYOffset;
document.querySelector('.parallax-image3').style.transform = 'translateY('+scrollPosition3 * 0.5 + 'px)';
})

var randomMessageButton = document.querySelector('#random-message-button');

var randomMessageDisplay = document.querySelector('#random-message-display');

var messages = ["Straw Bridge: Build a bridge using drinking straws and tape to test its strength with different weights.",
"Cardboard Marble Run: Create a marble run using cardboard tubes and boxes to explore principles of gravity and motion.",
"Paper Airplane Launcher: Build a simple launcher to launch paper airplanes and experiment with different designs.",
"Popsicle Stick Catapult: Construct a small catapult using popsicle sticks and rubber bands to launch small objects.",
"Balloon-Powered Car: Build a car using a water bottle, straws, and balloon to learn about propulsion.",
"Egg Drop Challenge: Design a contraption using household materials to protect an egg from breaking when dropped from a height.",
"Lemon Battery: Make a simple battery using lemons and zinc-coated nails to power a small LED.",
"Straw Rockets: Create and launch straw rockets using paper, tape, and straws to study the principles of aerodynamics.",
"Homemade Electromagnet: Build an electromagnet using a nail, wire, and battery to pick up small metal objects.",
"Soda Can Solar Heater: Use empty soda cans and aluminum foil to build a solar heater for heating water.",

  
];

randomMessageButton.addEventListener('click',function() {
var randomIndex=Math.floor(Math.random()*messages.length);
var randomMessage =messages[randomIndex];
randomMessageDisplay.textContent = randomMessage;
});