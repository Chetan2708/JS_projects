// Get all the option buttons
let optionsButtons = document.querySelectorAll(".option-button");
// Get all the advanced option buttons
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
// Get the font name element
let fontnameel = document.getElementById("fontName");
// Get the font size element
let fontSizeel = document.getElementById("fontSize");
// Get the writing area element
let writingArea = document.getElementById("text-input");
// Get the create link button
let linkButton = document.getElementById("createLink");
// Get all the align buttons
let alignButtons = document.querySelectorAll(".align");
// Get all the space buttons
let spaceButtons = document.querySelectorAll(".spacing");
// Get all the format buttons
let formatButtons = document.querySelectorAll(".format");
// Get all the script buttons
let scriptButtons = document.querySelectorAll(".script");

// Define a list of fonts
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

// Function to initialize the editor
const intializer = () => {
    // Highlight the align buttons initially
    highlighter(alignButtons, true);
    // Highlight the space buttons initially
    highlighter(spaceButtons, true);
    // Do not highlight the format buttons initially
    highlighter(formatButtons, false);
    // Highlight the script buttons initially
    highlighter(scriptButtons, true);

    // Add font options to the font select element
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontnameel.appendChild(option);
    });

    // Add font size options to the font size select element
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeel.appendChild(option);
    }

    // Set the default font size value
    fontSizeel.value = 3;
};

// Function to modify the text based on the command
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

// Attach click event listeners to basic option buttons
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

// Attach change event listeners to advanced option buttons
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

// Attach click event listener to create link button
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

// Function to handle highlighting of buttons
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

// Function to remove highlighting from buttons
const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

// Call the initializer function when the window loads
window.onload = intializer();
