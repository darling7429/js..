// const p1=new Promise((resolve,reject)=>{
// setTimeout(() => {
//    // resolve("success p1")
//    reject("error p1")
    
// }, 5000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          resolve("success p2") 
         
        
//     }, 1000);
//     })
    
// const p3=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("success p3")
            
//         }, 2000);
//         })
        
// async  function resolve_promises(){
//    const all= await Promise.any([p1,p2,p3])
//    console.log(all)

// }
// resolve_promises()
// var m=100
// const z=200;
// console.log(z)

// const obj={
//     z:10,
// z:()=>{
//    console.log(this.m) 
// }
   
// }
// obj.z()





// function outer() {
//     console.log(this); // (A)
    
//     function inner() {
//       console.log(this); // (B)
//     }
  
//     inner();
//   }
  
//   outer();



//   (function () {
//     console.log(this);
//   })();



   
//   "use strict"
// function show() {
//   console.log(this);
// }

// setTimeout(show, 1000);



// const numbers = {
//     values: [1, 2, 3],
//     multiply: function () {
//       return this.values.map(function (num) {
//         return num * this.factor;
//       });
//     },
//     factor: 2
//   };
  
//   console.log(numbers.multiply());
  





//   function greet() {
//     console.log(this.person);
  
//     function inner() {
//       console.log(this.person);
//     }
  
//     inner();
//   }
  
//   const  person = "Global";
//   var data="empty"
//   greet();


"use strict"

function x(){
    console.log(this);
}
window.x()
  



