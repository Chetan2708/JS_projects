const quoteApi = "https://api.quotable.io/random?minLength=80&maxLength=100";
const Paragraph = document.querySelector(".quotes");
const UserInput = document.getElementById("Input");
const Start = document.getElementById("startTest");
const Stop = document.getElementById("stopTest");
const Reset = document.getElementById("Reset");
let Quote = "";
let time = 60;
let timer = "";
let mistake = 0;

const fetching = async () => {
  // Fetching a random quote from the API
  const response = await fetch(quoteApi);
  // Storing the response data
  let data = await response.json();

  // Replacing the paragraph with the content from the API
  Random = data.content;
  let arr = Random.split("").map((value) => {
    return "<span class= chars>" + value + "</span>";
  });
  Paragraph.innerHTML = arr.join("");
};

window.onload = () => {
  // Initializing the application when the window loads
  UserInput.value = "";
  Start.style.display = "block";
  Stop.style.display = "none";
  UserInput.disabled = true;
  fetching();
};

Counter = () => {
  time = 59;
  timer = setInterval(updateTime, 1000);
};

updateTime = () => {
  if (time == 0) {
    // Disabling user input and displaying the result when time is up
    UserInput.disabled = true;
    UserInput.value = "";
    display();
  } else {
    document.getElementById("time").innerText = --time + "s";
  }
};

Start.addEventListener("click", () => {
  // Starting the typing test
  mistake = 0;
  timer = "";
  Start.style.display = "none";
  Stop.style.display = "block";
  Counter();
  UserInput.disabled = false;
  document.getElementById("mistake").innerText = mistake;
  document.getElementById("time").innerText = "59s";
  document.querySelector(".result").style.display = "none";
});

Stop.addEventListener("click", () => {
  // Stopping the typing test
  Start.style.display = "block";
  Stop.style.display = "none";
  UserInput.disabled = true;
  UserInput.value = "";
  mistake = 0;
  display();
  document.getElementById("mistake").innerText = mistake;
  clearInterval(timer);
  document.getElementById("Speed").innerText = "0";
  document.getElementById("Accuracy").innerText = "0";
});

Reset.addEventListener("click", () => {
  // Resetting the typing test
  UserInput.value = "";
  Start.style.display = "block";
  Stop.style.display = "none";
  UserInput.disabled = true;
  mistake = 0;
  document.getElementById("time").innerText = "0s";
  document.getElementById("mistake").innerText = mistake;
  fetching();
  clearInterval(timer);
});

UserInput.addEventListener("input", () => {
  // Comparing the user input with the paragraph
  let individualChars = document.querySelectorAll(".chars");
  individualChars = Array.from(individualChars);
  let UserValue = UserInput.value.split("");
  individualChars.forEach((char, index) => {
    if (char.innerText === UserValue[index]) {
      // Marking correct characters
      char.classList.add("success");
      char.classList.remove("fail");
    } else if (UserValue[index] == null) {
      // Handling empty input for a character
      char.classList.remove("success");
      if (char.classList.contains("fail")) {
        char.classList.remove("fail");
        mistake -= 1;
        document.getElementById("mistake").innerText = mistake;
      }
    } else {
      // Marking incorrect characters
      if (!char.classList.contains("fail")) {
        mistake += 1;
        char.classList.add("fail");
      }
      document.getElementById("mistake").innerText = mistake;
    }

    let verify = individualChars.every((val) => {
      // Checking if all characters are marked correctly or incorrectly
      return val.classList.contains("success") || val.classList.contains("fail");
    });

    if (verify) {
      clearInterval(timer);
      display();
      UserInput.disabled = true;
    }
  });
});

const display = () => {
  // Displaying the typing test result
  document.querySelector(".result").style.display = "block";
  let timeTaken = 1;
  if (time != 0) {
    timeTaken = (60 - time) / 100;
  }
  document.getElementById("Speed").innerText = (UserInput.value.length / 5 / timeTaken).toFixed(2) + "wpm";
  document.getElementById("Accuracy").innerText = (((UserInput.value.length - mistake) / UserInput.value.length) * 100).toFixed(1) + "%";
};
