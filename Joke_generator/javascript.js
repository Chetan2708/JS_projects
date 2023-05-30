const jokecontain = document.getElementById("joke");
const button = document.getElementById("but");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political&type=single";

// Function to fetch a joke from the API and display it
const getjoke = () => {
    jokecontain.classList.remove("fade"); // Remove fade animation class
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokecontain.innerHTML = `${item.joke}`; // Display the joke
            jokecontain.classList.add("fade"); // Add fade animation class
        });
}

button.addEventListener("click", getjoke); // Event listener for button click
getjoke(); // Fetch a joke when the page loads

