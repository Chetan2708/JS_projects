const score = document.querySelector("#score");
const time = document.querySelector("#time");
const squares = document.querySelectorAll(".Square");
const Mole = document.querySelector(".mole");
const restart = document.querySelector(".restart");
let hit
let result = 0 
let count = 60 
function randomsq() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });
    let random = squares[Math.floor(Math.random() * 9)];
    random.classList.add("mole");
    hit = random.id
}
function mole() {
    let timer =  null
    timer = setInterval(randomsq,500)  
}
mole();

squares.forEach((square) => {
    square.addEventListener("mousedown",()=>{
        if (square.id == hit){
            result++
            score.innerHTML = result 
            hit = null
        }
    })})

function countdown(){
    count= count - 1
    time.innerText =  count
    if (count == 0){
        clearInterval(currenttimerid)
        if (result >=10){
            alert("Good , you scored nice")
            a = confirm("Do you want to try again  ")
        }
        else{
            alert("You can do better")
            a = confirm("Do you want to try again  ")
        }
        if (a){
            location.reload()
        } 
        if (!a){
            clearInterval(currenttimerid)
            
        }    }
}
let currenttimerid =  setInterval(countdown, 1000)
