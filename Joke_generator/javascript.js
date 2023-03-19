const jokecontain = document.getElementById("joke");
const button = document.getElementById("but");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political&type=single"

const getjoke= ()=>{
    jokecontain.classList.remove("fade")   //animation
    fetch(url)
    .then(data =>data.json())
    .then(item=> {jokecontain.innerHTML = `${item.joke}`
    jokecontain.classList.add("fade")   //animation
});
}
button.addEventListener("click", getjoke);
getjoke();