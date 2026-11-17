// Start at midnight. Each click adds one hour.
let hour = 0;

const clock = document.getElementById("clock");
const timeLabel = document.getElementById("time-label");

function updateClock() {
  // Convert 0–23 into a 12-hour clock with AM / PM.
  const displayHour = hour % 12 || 12;
  const ampm = hour < 12 ? "AM" : "PM";
  clock.textContent = `${displayHour}:00 ${ampm}`;

  // Change the identity of the page based on the hour.
  let timeOfDay;
  let label;
  if (hour === 6) {
    timeOfDay = "sunrise";
    label = "Sunrise";
  } else if (hour >= 7 && hour <= 16) {
    timeOfDay = "day";
    label = "Daytime";
  } else if (hour === 17) {
    timeOfDay = "sunset";
    label = "Sunset";
  } else {
    timeOfDay = "night";
    label = "Nighttime";
  }

  document.body.dataset.time = timeOfDay;
  timeLabel.textContent = label;
}

function advanceHour() {
  hour = (hour + 1) % 24; // After 11 PM, return to 12 AM.
  updateClock();
}

// Clicking ANYWHERE on the page advances the clock.
document.addEventListener("click", advanceHour);

// Keyboard support: Space or Enter does the same thing.
document.addEventListener("keydown", function (event) {
  if ((event.key === " " || event.key === "Enter") && !event.repeat) {
    event.preventDefault();
    advanceHour();
  }
});

// Generate little randomly placed stars and bigger sparkles once.
const stars = document.getElementById("stars");
for (let i = 0; i < 115; i++) {
  const star = document.createElement("span");
  const sparkle = i % 9 === 0;
  star.className = sparkle ? "sparkle" : "star";
  if (sparkle) star.textContent = "✦";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty("--size", sparkle ? `${8 + Math.random() * 9}px` : `${1 + Math.random() * 2.5}px`);
  star.style.setProperty("--speed", `${1.5 + Math.random() * 3}s`);
  star.style.animationDelay = `${-Math.random() * 5}s`;
  stars.appendChild(star);
}

// Generate falling leaves once; CSS handles the falling animation.
const leaves = document.getElementById("leaves");
const leafColors = ["#d2aa66", "#c88d56", "#e8bc76", "#aab77a", "#dda46c"];
for (let i = 0; i < 28; i++) {
  const leaf = document.createElement("span");
  leaf.className = "leaf";
  leaf.style.left = `${Math.random() * 100}%`;
  leaf.style.setProperty("--leaf-color", leafColors[i % leafColors.length]);
  leaf.style.setProperty("--drift", `${Math.random() * 150 - 75}px`);
  leaf.style.setProperty("--duration", `${7 + Math.random() * 8}s`);
  leaf.style.animationDelay = `${-Math.random() * 15}s`;
  leaves.appendChild(leaf);
}

updateClock(); // Show 12:00 AM when the page first loads.
