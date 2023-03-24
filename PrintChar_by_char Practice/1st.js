//forward char by char print 
h = document.getElementById("h1")
let i =1
const text = "Hey, I am Chetan"
const id =setInterval(()=>{
    h.innerText=text.substring(0,i)        //implicit
    i++
    console.log(i)
if (i>text.length){
   clearInterval(id)
//    i=1   (do this if you want to restart this whole text char by char and let it print for a long time , it will reset after printing , add +value to text.length if you want delay )
} 
},100)

