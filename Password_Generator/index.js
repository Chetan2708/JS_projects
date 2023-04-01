const lengthSlider=document.querySelector(".pass-length input");
const options=document.querySelectorAll(".option input");
const button=document.querySelector(".generate");
const copy=document.querySelector(".input-text span");
const Password=document.querySelector(".input-text input");

const char= {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number:"0123456789",
    symbols:"!@#$%^&*(){}[]>?/~"
}

const generatepas=()=>{
    let static = "",
    randompw= "",
    Excludeduplicate=false,
    passlength = lengthSlider.value 

    options.forEach(option => {
        if (option.checked){
            if(option.id!="Exclude-duplicates"&&option.id!="Include space"){
                static+=char[option.id]
            }else if(option.id=="Include space"){
                static+=` ${static} `
            }else{
                Excludeduplicate=true;
            }
        }
        
    });
    for (let i = 0; i < passlength; i++) {
        let randomChar = static[Math.floor(Math.random()*static.length)];
        if (Excludeduplicate) {
            !randompw.includes(randomChar) || randomChar == " " ? randompw += randomChar : i--;
        } else {
            randompw += randomChar;
        }
    }
   Password.value = randompw;
    }
const copyIcon=()=>{
    navigator.clipboard.writeText(Password.value)
    copy.innerHTML = "check"
    copy.style.color = "#4285f4";
    setTimeout(()=>{
        copy.innerText = "copy_all";
        copy.style.color = "#707070";
    },1500)
}
    copy.addEventListener("click",copyIcon)
    button.addEventListener("click" , generatepas)
