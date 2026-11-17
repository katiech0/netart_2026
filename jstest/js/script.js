
const hamster = document.getElementById("hamster");
const seeds = document.getElementById("seeds");
const counter = document.getElementById("counter");

let clicks = 0;

// function to change hamster image
function changeHamster(imageName) {
    hamster.src = "images/" + imageName;
}

// when user hovers over the seeds
seeds.addEventListener("mouseenter", function () {
    if (clicks < 5) {
        changeHamster("hamster-eating.png");
        hamster.classList.add("eating");
    }
});

// when user clicks the seeds
seeds.addEventListener("click", function () {
    if (clicks < 5) {
        clicks++;
        counter.textContent = "Bites: " + clicks + " / 5";
    }

    if (clicks === 5) {
        changeHamster("hamster-fat.png");
        hamster.classList.remove("eating");
        hamster.classList.add("fat");
        counter.textContent = "Your hamster is FAT!";
    }
});