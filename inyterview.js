// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// setTimeout(() => {
//     console.log(3);
// }, 100);

// new Promise((resolve, reject) => {
//     console.log(4);
//     resolve(5);
//     console.log(6);
//     reject(7);
// })
// .then((value) => console.log(value))
// .then((value) => console.log(value))
// .then((value) => console.log(value))
// .catch((e) => console.log(e))
// .catch((e) => console.log(e))
// .finally(() => console.log(8));

// console.log(9);



// console.log("Start");
// new Promise((resolve, reject) => {
//     console.log("Inside Promise");
//     resolve("Resolved!");
// }).then((result) => {
//     console.log(result);
// });
// console.log("End");





// new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// }).then((value) => {
//     console.log(value);
// });
// console.log(4);



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resolved!"), 1000);
// });

// promise.then((data) => {
//     console.log(data); 
//     return "Next step";
// }).then((data) => {
//     console.log(data);
//     throw new Error("Something went wrong!");
// }).catch((error) => {
//     console.error(error); 
// }).finally(() => {
//     console.log("Cleanup done!");
// });


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Data fetched"), 2000);
//     });
// }

// fetchData().then((data) => console.log(data));






// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve()
//     .then(() => {
//         console.log("C");
//         return Promise.resolve("D");
//     })
//     .then((data) => {
//         console.log(data);
//         setTimeout(() => console.log("E"), 0);
//     });

// console.log("F");








// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve()
//     .then(() => {
//         console.log("C");
//         return Promise.resolve("D");
//     })
//     .then((value) => {
//         console.log(value);
//         setTimeout(() => console.log("E"), 0);
//     });

// console.log("F");



// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve()
//     .then(() => {
//         console.log(3);
//         return new Promise((resolve) => resolve(4));
//     })
//     .then((value) => {
//         console.log(value);
//     });

// console.log(5);




// const p1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("resolved 1")
//     }, 5000);

// })
// const p2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("resolved 2")
//     }, 10000);
// })

// async function resolve_all(){
//     const result1=await p1;
//     console.log(result1)
//     console.log("namaste 1")


//     const result2=await p2;
//     console.log(result1)
//     console.log("namaste 2")


// }

// resolve_all()






// const p2= new Promise(function(resolve,reject){
//       console.log("fuck")
//       setTimeout (function(){
//   resolve("hi resolved")
//       },4000)
      
//       console.log("hi")
//     })
  
                                                   //The Promise executor runs first before await has any effect.this is the case 
                                                  // where we use await infromt of newpromise
  // async function resolved(){
  //   const output=await p2
  //   console.log(output)
  //   console.log("hello")
    
  // }
 
  // resolved()
  // console.log("hello")





  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(1000)
//     .then(() => {
//         console.log("Step 1");
//         return delay(1000);
//     })
//     .then(() => console.log("Step 2"));

async function execute() {
    await delay(1000);
//  console.log(data)
  console.log("Step 1");
  await delay(1000);
  console.log("Step 2");
}
execute();






