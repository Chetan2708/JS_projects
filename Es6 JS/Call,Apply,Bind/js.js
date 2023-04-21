

//Call()
// Problem Statement ---->
// If the function is inside one object and you want to print 2nd object details 
// let userdetails = {
//     name:"Chetan Gupta" ,
//     age :21,
//     Designation:"Student",
//     printDetails:function(){
//         console.log(this.name)
//     }
// }

// userdetails.printDetails()


// let userdetails2 = {
//     name:"Gupta" ,
//     age :21,
//     Designation:"Engineer",
// }


// //function borrowing
// userdetails.printDetails.call(userdetails2)


//Call() ,Apply , Bind
//Problem --2 :
//If the function is outside the objects and you have to print objects properties
let userdetails = {
    name:"Chetan Gupta" ,
    age :21,
    Designation:"Student",
}
//Function
let printDetails =function(state,country){
    console.log(this.name + " " + state+ " "+ country)
}
printDetails.call(userdetails , "Jammu","India")


let userdetails2 = {
    name:"Gupta" ,
    age :21,
    Designation:"Engineer",
}


//function borrowing-->Call()
printDetails.call(userdetails2 , "Delhi","India")

//Similar to call()
//Apply() ---> can pass a list as well
printDetails.apply(userdetails2 , ["Delhi","India"])


//Bind()-----> can create another function by making copy  , call it later 
let newfun = printDetails.bind(userdetails2 , "Delhi","India")
newfun()
