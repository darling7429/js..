// create_order()
// proceed_to_payment(orderid)
// order_summary(paymentinfo)
// updatewallet(balance)


function   validatecart(){
    return true 
}

function createorder(){
    let orderid=123456
    return new Promise((resolve, reject) => {
        if(validatecart()){
            let success={order:" order created successfully",id:orderid,items:["machines","bats","mobilephones"]}
            setTimeout(() => {
                resolve(success)
            }, 5000);
            
        }
        else{
            reject("cart is empty please add items to it ")
        }
        
    })
}

function proceed_to_payment(orderid){
    return new Promise((resolve, reject) => {
        let success={order:" order created successfully",balance:200,payment:"payment success for id :"+orderid.id,id:orderid,items:["machines","bats","mobilephones"]}
        
        let payment="success"
        if(payment=="success"){
            setTimeout(() => {
                resolve(success)
            }, 5000);
            
        }
        else{
            reject("payment not successful")
        }
        
    })
}

function order_summary(paymentinfo)
{
    return new Promise((resolve, reject) => 
        {
        if(paymentinfo)
            {
                setTimeout(() => {
                    resolve(paymentinfo)
                }, 5000);
        }
        else
        {
            reject("payment info is empty")
        }



      })
    }


function update_wallet(balance){
    return new Promise((resolve, reject) => {


        if(balance){
            setTimeout(() => {
                resolve("wallet updated successfully" + balance)
            }, 5000);
            
        }
        else{
            reject("wallet not updated")
        }
})
}





createorder().then(function(data){
    console.log(data.order+":"+data.id)
    return data
    
}).then(function(data){
   
return proceed_to_payment(data)

}).then(function(data){
    console.log(data.payment)
    return order_summary(data)
    
    
})
.then(function(data){
  console.log("items are:"+data.items)
   update_wallet(data).then(function(){console.log("updated wallt balance : "+data.balance)

     })
  })





//   How Synchronous Code Blocks the Main Thread
// When JavaScript encounters synchronous code, it executes each statement in order. If a synchronous task takes too long (like a large loop or complex computation), it blocks the main thread, meaning:

// The UI becomes unresponsive (e.g., buttons don’t work, scrolling freezes).
// Other JavaScript tasks (async callbacks, event listeners, timers) get delayed.
// The event loop cannot continue until the blocking operation is finished.


// What is the Main Thread?
// The main thread is the single thread of execution in JavaScript that runs all the code, including:

// The call stack
// The event loop
// Handling asynchronous tasks (via callback queue and microtask queue)
// 💡 Key Difference:

// The call stack is just a part of the main thread.
// The main thread manages both synchronous and asynchronous tasks, while the call stack only handles synchronous execution.