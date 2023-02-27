// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Draw the background
ctx.fillStyle = "#C3E3F6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the sun
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fillStyle = "#FFD700";
ctx.fill();

// Draw some clouds
ctx.beginPath();
ctx.arc(400, 150, 50, 0, 2 * Math.PI);
ctx.arc(450, 150, 50, 0, 2 * Math.PI);
ctx.arc(500, 150, 50, 0, 2 * Math.PI);
ctx.arc(550, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.arc(750, 200, 50, 0, 2 * Math.PI);
ctx.arc(800, 200, 50, 0, 2 * Math.PI);
ctx.arc(850, 200, 50, 0, 2 * Math.PI);
ctx.arc(900, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.arc(1100, 100, 50, 0, 2 * Math.PI);
ctx.arc(1150, 100, 50, 0, 2 * Math.PI);
ctx.arc(1200, 100, 50, 0, 2 * Math.PI);
ctx.arc(1250, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#fff";
ctx.fill();

// Draw the ocean
ctx.fillStyle = "#0000FF";
ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

// Draw some waves
ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
for (var i = 0; i < canvas.width; i += 50) {
	ctx.lineTo(i + 25, canvas.height / 2 + 25);
	ctx.lineTo(i + 50, canvas.height / 2);
}
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.fillStyle = "#ffffff";
ctx.fill();

// Draw some fish
ctx.beginPath();
ctx.arc(600, 500, 30, 0, 2 * Math.PI);
ctx.arc(635, 515, 15, -9, 2 * Math.PI);
ctx.arc(635, 485, 15, -9, 2 * Math.PI);
ctx.fillStyle = "#FF4500";
ctx.fill();

ctx.beginPath();
ctx.arc(400, 600, 30, 0, 2 * Math.PI);
ctx.arc(435, 615, 15, -9, 2 * Math.PI);
ctx.arc(435, 585, 15, -9, 2 * Math.PI);
ctx.fillStyle = "#B4F8C8";
ctx.fill();

ctx.beginPath();
ctx.arc(800, 550, 30, 0, 2 * Math.PI);
ctx.arc(835, 565, 15, -9, 2 * Math.PI);
ctx.arc(835, 535, 15, -9, 2 * Math.PI);
ctx.fillStyle = "#4A0D67";
ctx.fill();

ctx.beginPath();
ctx.arc(300, 500, 30, 0, 2 * Math.PI);
ctx.arc(335, 515, 15, -9, 2 * Math.PI);
ctx.arc(335, 485, 15, -9, 2 * Math.PI);
ctx.fillStyle = "#9BF3F0";
ctx.fill();

ctx.beginPath();
ctx.arc(1200, 600, 30, 0, 2 * Math.PI);
ctx.arc(1235, 615, 15, -9, 2 * Math.PI);
ctx.arc(1235, 585, 15, -9, 2 * Math.PI);
ctx.fillStyle = "#ffa737";
ctx.fill();

// Draw the boat body
ctx.beginPath();
ctx.fillStyle = "#8B4513";
ctx.fillRect(800, 300, 300, 100);

// Draw the windows
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(850, 320, 50, 50);
ctx.fillRect(1000, 320, 50, 50);

// Lining the windows and connecting sail
ctx.lineWidth = 5;
ctx.strokeStyle = "#272727"

ctx.moveTo(850, 345);
ctx.lineTo(900, 345);

ctx.moveTo(875, 320);
ctx.lineTo(875, 370);

ctx.moveTo(1000, 345);
ctx.lineTo(1050, 345);

ctx.moveTo(1025, 320);
ctx.lineTo(1025, 370);

ctx.moveTo(1030, 250)
ctx.lineTo(1030, 300);
ctx.stroke()

// Draw the sail
ctx.beginPath();
ctx.moveTo(850, 250);
ctx.lineTo(850, 250);
ctx.lineTo(1050, 250);
ctx.lineTo(1050, 150);
ctx.closePath();

// Define the sail colors
var gradient = ctx.createLinearGradient(250, 100, 450, 100);
gradient.addColorStop(0, "#FF0000");
gradient.addColorStop(0.5, "#FFFF00");
gradient.addColorStop(1, "#FF00FF");

// Fill the sail with the gradient
ctx.fillStyle = gradient;
ctx.fill();

// Add a caption
ctx.fillStyle = "#343330";
ctx.font = "48px Arial";
ctx.fillText("Fishing Day!", canvas.width / 2 - 200, 100);