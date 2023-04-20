//Closure ----> Values are not lost , they are retained 

const sum = ((a,b,c)=>{ 

    return{ 
        getsumtwo:function(){
            return `Adding ${a} and ${b} ---->${a+b}`
    },
    getsumthree:function(){
        return `Adding ${a} ${b} and ${c} -----> ${a+b+c}`
    }
}
})


const store= sum(2,4,6)

console.log(store.getsumtwo()) //values are retained here when they were called in sum function 
console.log(store.getsumthree())  


const store1= sum(2,6,8)
console.log(store1.getsumtwo()) 
console.log(store1.getsumthree())  



//A closure is a feature of JavaScript that allows a function to access variables that are defined in the outer scope, even after the outer function has returned. In this code, the sum function returns an object that contains two inner functions, getsumtwo and getsumthree. These inner functions are closures because they have access to the variables a, b, and c that are defined in the outer scope of the sum function.