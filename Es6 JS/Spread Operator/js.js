//Spread Operator
let a = {
  name: 'chetan',
  age: '18',
  class: '6th sem',
};
address={
    street:"Janpiur",
    state:"jammu",
}

let a_copy  ={...a,...address} //using spread 
 a_copy.name = 'Copy' 
console.log(a,a_copy)   //different name values because its a copy of a not a itself



//Rest Operator

function solve(...num) {   //using rest operator 
        console.log(num)   //automatically makes it array because we use rest operator now use for loop on array and calculate total 
        let total = 0 
        for (let n of num){
            total+=n
        }
        return total

}

console.log(solve(1,2,3))
