const arr= [
{
    question: "ARE YOU READY?",
    a:"No",
    b:"Yes",
    c:"None",
    correct:'a'
},{
    question: "HTML stands for ?",
    a:"Hyper text mark language",
    b:"Hypert text markup language",
    c:"hyper text markup language",
    correct:'c'

},{
    question: "ARE U 18+?",
    a:"NO",
    b:"YES",
    c:"I AM ABOVE 50",
    correct:'b'
},{
    question: "HTML stands for ?",
    a:"Hyper text mark language",
    b:"Hypert text markup language",
    c:"hyper text markup language",
    correct:'c'
}
]
const quiz1= document.getElementById("quiz");
const questionEl= document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const submitt= document.getElementById("submit");
const previous = document.getElementById("previous");
const answers=document.querySelectorAll(".answer")
const reset = document.getElementById("reset");
let current_ques = 0;
let score=0;
loop() //initial call

function loop(){
    deselected()
    const quiz= arr[current_ques];
    questionEl.innerText=quiz.question;
    a_text.innerText= quiz.a;
    b_text.innerText= quiz.b;
    c_text.innerText= quiz.c;
    
}
function getselected()
{
    let ans=undefined;
    answers.forEach((answer1)=>{
        if (answer1.checked){
            ans= answer1.id
        }
    })
    return ans;

}
function deselected(){
    answers.forEach((answer1)=>{
        answer1.checked= false;
    })
}
submitt.addEventListener("click", function()
{             //anonymous function with event listener 
    const ans1=getselected();
    console.log(ans1);
    if (ans1)
    {
        if (ans1===arr[current_ques].correct){
            score++;
        }
        current_ques++;
        if (current_ques<arr.length){
            loop()
        }
        else if (current_ques>=arr.length){
            // alert("You are done! SWITCH OFF AND SLEEP")
            quiz1.innerHTML = `<h2>You answered correctly at ${score}/${arr.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
            current_ques=arr.length         //fixing current question so that it doesnot keep on increasing whenever we submit

        }   
    }
})
    previous.addEventListener("click", ()=>{
            if (current_ques==0){
                alert("You are on first question!")
            } 
            else if(current_ques>0 && arr.length>current_ques){        //2nd question or 2nd last question
                current_ques--;
                loop()
            }
            else if(current_ques==arr.length){          //last question so now we have to subtract 2 from it otherwise we will have to press previous twice
                current_ques=current_ques-2;
                loop()
            }
        } )
        reset.addEventListener("click", ()=>{
            if (current_ques==0){
                alert("You are on first question!")
            }
            else if (current_ques>0){
                alert("ARE you sure you want to reset all your question answers?")
    
                current_ques=0;
                loop()
            }
        })

