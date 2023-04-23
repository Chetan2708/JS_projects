//High order function

//forEach

let Student = [
  {
    studentName: "jack",
    studentClass: 6,
    studentSection: "a",
    age:12,
  },
  {
    studentName: "tom",
    studentClass: 7,
    studentSection: "a",
    age:6,
  },
  {
    studentName: "Ash",
    studentClass: 12,
    studentSection: "a",
    age:20,
  },
];

//foreach()
Student.forEach(function(student,index){        //it recieves callback
    console.log(student.studentName)
    console.log(index)

})

const ages = [1,2,3,4,5,6,7,8,9,17,15,14,13,20,33,44,55,66,77,88,99,11]

//filter()
const underage = ages.filter(age=> age<=18 )  //age less than 18 return True and add age to underage []

console.log(underage)



// map()

Student.map((i,index)=>(console.log(i.studentName,index)))

// const dummy = Student.map((i,index)=>{
//     return `${i.studentName} ${i.studentClass}`    //using string literal 
// })

// console.log(dummy)


//Sort()


// const sorted = Student.sort((i1,i2)=>{
// if(i1.studentClass<i2.studentClass){                                   //long 
//     return 1
// }
// else{
//     return -1
// }
// })
const sorted = Student.sort((i1,i2)=>(i1.studentClass<i2.studentClass ? 1:-1))          //shorter 
console.log(sorted)



