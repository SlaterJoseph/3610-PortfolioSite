var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var sound3 = document.getElementById("sound3");
var sound4 = document.getElementById("sound4");
var sound5 = document.getElementById("sound5");

document.getElementById("button1").addEventListener("click", function(){
	sound1.play();
});

document.getElementById("button2").addEventListener("click", function(){
	sound2.play();
});

document.getElementById("button3").addEventListener("click", function(){
	sound3.play();
});

document.getElementById("button4").addEventListener("click", function(){
	sound4.play();
});

document.getElementById("button5").addEventListener("click", function(){
	sound5.play();
});
