const lengthSlider = document.querySelector(".pass-length input"); // Get the length slider input element
const options = document.querySelectorAll(".option input"); // Get all the option input elements
const button = document.querySelector(".generate"); // Get the generate button element
const copy = document.querySelector(".input-text span"); // Get the copy span element
const Password = document.querySelector(".input-text input"); // Get the password input element

const char = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbols: "!@#$%^&*(){}[]>?/~"
};

const generatepas = () => {
  let static = ""; // Stores the selected character options
  let randompw = ""; // Stores the randomly generated password
  let Excludeduplicate = false; // Flag to exclude duplicate characters
  let passlength = lengthSlider.value; // Get the length value from the slider input

  options.forEach(option => {
    if (option.checked) {
      if (option.id != "Exclude-duplicates" && option.id != "Include space") {
        static += char[option.id]; // Add the character set to 'static' based on the selected options
      } else if (option.id == "Include space") {
        static += ` ${static} `; // Include a space character if the "Include space" option is selected
      } else {
        Excludeduplicate = true; // Set the flag to exclude duplicate characters
      }
    }
  });

  for (let i = 0; i < passlength; i++) {
    let randomChar = static[Math.floor(Math.random() * static.length)]; // Get a random character from the 'static' set
    if (Excludeduplicate) {
      // If duplicate exclusion is enabled
      if (!randompw.includes(randomChar) || randomChar == " ") {
        // Add the character to the password if it's not already included or it's a space character
        randompw += randomChar;
      } else {
        i--; // Decrement the index to repeat the iteration for another random character
      }
    } else {
      randompw += randomChar; // Add the character to the password without checking for duplicates
    }
  }

  Password.value = randompw; // Set the generated password as the value of the password input field
};

const copyIcon = () => {
  navigator.clipboard.writeText(Password.value); // Copy the password to the clipboard
  copy.innerHTML = "check"; // Change the copy icon to a checkmark temporarily
  copy.style.color = "#4285f4"; // Change the color of the icon to blue
  setTimeout(() => {
    copy.innerText = "copy_all"; // Revert the copy icon back to "copy_all"
    copy.style.color = "#707070"; // Revert the color of the icon back to gray
  }, 1500); // Reset the copy icon after 1.5 seconds
};

copy.addEventListener("click", copyIcon); // Attach the copyIcon function to the click event of the copy span element
button.addEventListener("click", generatepas); // Attach the generatepas function to the click event of the generate button element
