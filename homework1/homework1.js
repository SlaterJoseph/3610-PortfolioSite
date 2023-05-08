var fruit = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 5, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
];

const spacing = {
    "Apple" : 250,
    'Orange': 150,
    'Banana': 200,
    'Kiwi': 100,
    'Blueberry': 100,
    'Grapes': 150
}

var canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");

var barHeight = 40;
var barGap = 20;
var x = 50;
var y = 50;

for (var i = 0; i < fruit.length; i++) {
    ctx.fillStyle = fruit[i].color;
    var barWidth = fruit[i].quantity * 10;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "black";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(fruit[i].name + ' ' + fruit[i].quantity, spacing[fruit[i].name], y + barHeight / 2);
    y += barHeight + barGap;
}

