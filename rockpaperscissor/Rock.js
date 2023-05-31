// Get references to the HTML elements
const user = document.getElementById("user");
const comp = document.getElementById("comp");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Add event listeners to the buttons
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    user.innerHTML = userChoice;
    const computerChoice = getRandomChoice();
    comp.innerHTML = computerChoice;
    const gameResult = getResult(userChoice, computerChoice);
    result.innerHTML = gameResult;
  })
);

// Generate a random choice for the computer
function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the result of the game
function getResult(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    return "It's a draw!";
  }

  // Use a switch statement for better readability
  switch (computerChoice) {
    case "rock":
      return userChoice === "scissor" ? "Computer wins!" : "User wins";
    case "paper":
      return userChoice === "rock" ? "Computer wins!" : "User wins";
    case "scissor":
      return userChoice === "paper" ? "Computer wins!" : "User wins";
    default:
      return "Invalid choice";
  }
}
