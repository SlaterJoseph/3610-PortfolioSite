
const manBubble = document.getElementById("manBubble");
const archerBubble = document.getElementById("archerBubble");
const arrow = document.getElementById("arrow")
const arrowStart = ("52%", "23%")
const texts = [
    "Do you have any final words?",
    "Just killing one of us won't stop our cause",
    "Be that as it may, I will not stop fighting",
    "ARGHHHHH... we will fight on"
]
let currentIndex = 0;


setInterval(() => {
  currentIndex++;
  if (currentIndex >= texts.length) {
    currentIndex = 0;
    // Reset the arrow
    arrow.style.transition = "0s"
    arrow.style.top = "52%"
    arrow.style.left = "23%"
  }

  if (currentIndex % 2 == 0) {
    archerBubble.style.display = 'block';
    archerBubble.textContent = texts[currentIndex];
    manBubble.style.display = 'none';

    if (currentIndex == 2){
        arrow.style.transition = "2s"
        arrow.style.top = "74%"
        arrow.style.left = "68%"
    }

  } else {
    manBubble.style.display = 'block';
    manBubble.textContent = texts[currentIndex];
    archerBubble.style.display = 'none';
  }
}, 4000);