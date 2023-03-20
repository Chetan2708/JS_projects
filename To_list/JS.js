const todoinput = document.querySelector(".txt-box")
const todobutton =  document.querySelector(".todo-button")
const todolist =  document.querySelector(".todo-list")
const filt=  document.querySelector(".option-class")


//eventlistener
todobutton.addEventListener("click" ,add)
todolist.addEventListener("click" ,Delete)
todolist.addEventListener("click" ,Check)
filt.addEventListener("click" ,tags)


function add(event){
    //whenever someone clicks on it a note is created with checked and trash buttons

    event.preventDefault();        //preventing submit button of form tag to submit 
    //create div
    const tododiv = document.createElement("div")   //<div class = "todo">
    tododiv.classList.add("todo")
    //create list 
    const newtodo = document.createElement("li")        //<li class= "todoitems"></li> (inside div todo)
    newtodo.classList.add("todoitems")
    newtodo.innerText = todoinput.value                 //Showing whatever entered inside input uasing .value attribute
    tododiv.appendChild(newtodo)
    //create buttons
    const checkedButton = document.createElement("button")
    checkedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'    // <button class ="Checked"> (inside li to doitems)
    checkedButton.classList.add("Checked")
    tododiv.appendChild(checkedButton)
    //Trash button
    const TrashButton = document.createElement("button")                 //button trash inside li 
    TrashButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    TrashButton.classList.add("Trash")
    tododiv.appendChild(TrashButton)



    todolist.appendChild(tododiv)           //whole div inside <ul> tag in Html file 
}

/* <div class="todo">
    <li class="todoitems"></li>
    <button>Checked</button>
    <button>Trash</button>
</div> */


function Delete(e){
    const Some = e.target   //EVENT TAREGT , SHOWS CLASSNAME OF THE EVENT 
    console.log(Some.classList)  //DOMTokenList ['Trash', value: 'Trash']  0 :  "Trash"   length:  1  value:"Trash"
    if (Some.classList[0]==="Trash"){    //.classlist returns a DOMTokenList Object which is like an array and has all classes in it. Here we are accessing its first class from the array that's why 0.
        const todo = Some.parentElement;
        todo.remove()
    }
}

function Check(e){
if(e.target.classList[0]=="Checked"){
    const todo =  e.target.parentElement
    todo.classList.toggle("complete")
}
}

//Select tags


function tags(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "All":
          todo.style.display = "flex";
          break;
        case "Completed":
          if (todo.classList.contains("complete")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "Uncompleted":
          if (!todo.classList.contains("complete")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
