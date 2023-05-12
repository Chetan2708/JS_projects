//Async Programming
//Callback , Promises , Async , Await

const datas = [
  { name: "Chetan", Profession: "Web_Dev" },
  { name: "Abhi", Profession: "Web_Dev" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Promise function ---->  

const createData = (newdata) => {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      let error = true;
      if (error) {
        resolve();
      } else {
        reject("Something wrong lagra ");
      }
      datas.push(newdata);
    }, 1000);
  });
};
//Promise function (call) ---->
// createData({name:"Abhay", Profession: "ML engineer" }).then(getData).catch(err => console.log(err))



// Callback function   ---> 

// createData({name:"Abhay", Profession: "ML engineer" },getData)
// const createData=(newdata,callback)=>{
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback()
//     },1000)
// }
// createData({name:"Abhay", Profession: "ML engineer" },getData)




//Async and await   ------>

async function start() {
    await createData({name:"Abhay", Profession: "ML engineer" })
    getData()
}
start()
