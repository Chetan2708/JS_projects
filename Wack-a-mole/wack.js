const score = document.querySelector("#score");
const time = document.querySelector("#time");
const squares = document.querySelectorAll(".Square");
const Mole = document.querySelector(".mole");
const restart = document.querySelector(".restart");
let hit;
let result = 0;
let count = 60;

function randomsq() {
  // Remove "mole" class from all squares
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  // Choose a random square and add "mole" class to it
  let random = squares[Math.floor(Math.random() * 9)];
  random.classList.add("mole");
  hit = random.id; // Store the ID of the mole square
}

function mole() {
  let timer = null;
  timer = setInterval(randomsq, 500);
}

mole();

// Add event listener to each square
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hit) {
      // If the square clicked is the mole square, increment the result
      result++;
      score.innerHTML = result;
      hit = null; // Reset the hit variable
    }
  });
});

function countdown() {
  count = count - 1;
  time.innerText = count;
  if (count == 0) {
    // If time is up
    clearInterval(currenttimerid);
    if (result >= 10) {
      alert("Good, you scored nice");
      a = confirm("Do you want to try again?");
    } else {
      alert("You can do better");
      a = confirm("Do you want to try again?");
    }
    if (a) {
      // Reload the page to restart the game
      location.reload();
    }
    if (!a) {
      clearInterval(currenttimerid);
    }
  }
}

let currenttimerid = setInterval(countdown, 1000);
