const user = document.getElementById("user");
const comp = document.getElementById("comp");
const result = document.getElementById("result");
const but = document.querySelectorAll("button");
let userchoice;
let computerdisplay;
let res;
but.forEach((but) =>
  but.addEventListener("click", (e) => {
    userchoice = e.target.id;
    user.innerHTML = userchoice;
    getrandom();
    getresult();
  })
);
function getrandom() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === 0) {
    computerdisplay = "rock";
  }
  if (random === 1) {
    computerdisplay = "paper";
  }
  if (random === 2) {
    computerdisplay = "scissor";
  }
  comp.innerHTML = computerdisplay;
}

function getresult() {
  if (computerdisplay === userchoice) {
    res = "Its a draw";
  }
  if (computerdisplay === "rock" && userchoice === "scissor") {
    res = "Computer wins";
  }
  if (userchoice === "rock" && computerdisplay === "scissor") {
    res = "user wins";
  }
  if (computerdisplay === "paper" && userchoice === "scissor") {
    res = "user wins";
  }
  if (computerdisplay === "paper" && userchoice === "rock") {
    res = "Computer wins";
  }
  if (computerdisplay === "scissor" && userchoice === "rock") {
    res = "user wins";
  }
  if (computerdisplay === "scissor" && userchoice === "paper") {
    res = " computer wins";
  }
  result.innerHTML = res
}
