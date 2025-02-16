
// const p1=new Promise((resolve, reject) => {
    
// setTimeout(() => {
//     resolve(" promise 1")
    
// }, 40000);

// })

// const p2=new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         resolve(" promise 2")
        
//     }, 5000);
    
//     })


// //     p1.then(function(res){
// // console.log(res)

// //     })
//     //here hi will be logged and then after 5 secs
//     //  p1 will be resolved this is the issue with normal promise handling method



// async function getdata(){

//     console.log("hi");
//     const val1=await p1;
//     console.log(val1)
//     console.log("namaste 1")



//     const val2=await p2;
//     console.log(val2)
//     console.log("namaste 2")

// }
// getdata()




async function getdata(){
    console.log("hi");
    const v1=fetch("https://www.google.com")
    v1.then(function(response){
        console.log(response)
        
    })
    console.log("completed")
   
}
getdata()






