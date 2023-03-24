//front print then back print
h = document.getElementById("h1")
let i =1
// const text = "Hey, I am Chetan"
const texts = ["Hey, I am Chetan" ,  "Happy To meet you"]
let j = 0 
forward = true
id = setInterval(() => {
h.textContent = texts[j].substring(0,i)
if(forward){
    i++
}
else{
    i--
}
if (i>texts[j].length){
    forward = false
}
if (i<0){
    forward= true
    j++
}
if (j==texts.length){
    window.clearInterval(id)
}
console.log(i)

},100)

