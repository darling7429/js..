/*const pi=3.14

let radius=[2,4,6,8]

function calculate(radius,arr)
{
let new_arr=[]
    for(let i=0;i<radius.length;i++){

        new_arr.push(arr(radius[i]))   //from line 5 to 14 represents the same map function logic instaed
        //  of this we can do like this also
        
    }
    return new_arr
}


function area(radius){
    return 2*pi*radius*2

}


console.log(calculate(radius,area)) */




// let array=[1,2,7,9,5,3]


// function even (x){
//     return  x%2!=0;

// }

// function filters (arr,fun){
//     let new_arr=[]
//     for(let i=0;i<array.length;i++){
//               if (fun(arr[i])){
//                 new_arr.push(arr[i])
//               }

//     }
//     return new_arr

// }


// const value=filters(array,even)
// console.log(value)




const users=[{firstname:"naresh",lastname:"bochu",age:24} ,
    {firstname:"jaswanth",lastname:"raju",age:26} ,
    {firstname:"varun",lastname:"gudi",age:34},
    {firstname:"prem ",lastname:"sagar",age:26}]

//  let output=   users.map((x)=>{
//         return x.firstname +" " +x.lastname

//     })
//     console.log(output)

// const output=users.reduce(function (acc,curr){
//   if(acc[curr.age]){
//    acc[curr.age]=  ++ acc[curr.age] 
//   }
//   else{
//     acc[curr.age]=1
//   }
//   return acc;

// },{})
// console.log(output)


// const output=users.filter((x)=>x.age>24).map((x)=>x.age )
// console.log(output)

// const output=users.reduce((acc,curr)=>{
//     if(curr.age>24){
//         acc.push(curr.firstname )


//     }
//     return acc

// },[])
// console.log(output)



// function timer (hello,delay){
//     let start=Date.now()
//    while(Date.now()-start<delay){

//    }
//    hello();

// }

// function hello(){
//     console.log("hello man ")
// }


// timer(hello,5000)



//promise internal structure 
// class MyPromise {
//     constructor(executor) {
//         this.state = 'pending'; // Initial state is pending
//         this.value = undefined; // The value of the resolved promise
//         this.reason = undefined; // The reason for rejection

//         // `resolve` function is used to fulfill the promise
//         const resolve = (value) => {
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled'; // Transition to fulfilled state
//                 this.value = value;
//             }
//         };

//         // `reject` function is used to reject the promise
//         const reject = (reason) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected'; // Transition to rejected state
//                 this.reason = reason;
//             }
//         };

//         // Run the executor function, passing `resolve` and `reject`
//         executor(resolve, reject);
//     }

//     // `.then()` handles the success or failure of the promise
//     then(onFulfilled, onRejected) {
//         if (this.state === 'fulfilled') {
//             onFulfilled(this.value);
//         } else if (this.state === 'rejected') {
//             onRejected(this.reason);
//         }
//     }
// }




// const my_prom=new Promise((resolve, reject) => {
//     const success=true
//     if(success){
//         resolve("success")
//     }
//     else{
//         reject("failure")
//     }
// })
// console.log(my_prom)

// . How Promises Guarantee the Callback
// The guarantee that callback functions will be executed relies on two key things:

// Promise Resolution Mechanism:

// Once a Promise is resolved (fulfilled) or rejected, 
// it ensures that the corresponding .then() or .catch() function is called.
// The resolution of a Promise is asynchronous, 
// which means that even though .then() or .catch() is attached immediately, 
// it will be executed in the next event loop cycle, 
// ensuring that the JavaScript execution stack is clear before calling the callbacks.
// Microtask Queue (Event Loop):

// When a promise is resolved (fulfilled or rejected), 
// the resolution handlers (like .then(), .catch(), 
// .finally()) are placed in the microtask queue.
// The event loop prioritizes the microtask queue over the task queue
//  (which handles things like setTimeout or setInterval), 
//  so the promise callbacks will always execute before any other tasks or events.



// const git="https://api.github.com/users/darling7429"
// const user=fetch(git)
// user.then((data)=>{
//     console.log(data.json().
//     avatar_url
//     )
// });
const cart=1


function createorder(cart){
    const orderid=123456789
    const pr=new Promise(function(resolve,reject){
        if(cart){
            resolve(orderid)
        }
        else{
            const err=new Error("unknown error occurred")
            reject(err)
        }


    })
    return pr
}

function proceedtopayment(orderid){
    let success=true
    return new Promise((resolve, reject) => {
        if(success)
            {
                resolve("payment successful for this order number: "+ orderid)

            }
        else{
            reject("payment not successful")
        }
        
    })
    //


}



createorder(cart).then(function(data){
   return data;
}).then(function(data){

  return proceedtopayment(data)
    
}).then(function(data){
    console.log(data)
})
 .catch(function(error){
    console.log(error)
})
