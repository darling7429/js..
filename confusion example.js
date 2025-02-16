// Execution Flow of Your Code



// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {   // This registers a timer in the Web API
//         resolve("resolved successfully");  // Resolves the promise
//     }, 10000);
// });

// async function load_data() {
//     const p1 = await p;  // Function suspends here
//     console.log("namaste1");
//     console.log(p1);

//     const p2 = await p;
//     console.log("namaste2");
//     console.log(p2);
// }

// load_data();

// Step-by-Step Breakdown
// 1. Global Execution (Main Thread)
// p (Promise) is created.
// setTimeout() starts a 10-second timer in the Web API.
// load_data() is called and pushed to the Call Stack.


// 2. Encountering await p
// javascript
// Copy
// Edit
// const p1 = await p;
// Since p is pending, load_data() is removed from the Call Stack and stored in the Microtask Queue (waiting for resolution).
// Meanwhile, the timer is still running in the Web API.



// 3. Timer Completes After 10 Seconds
// javascript
// Copy
// Edit
// setTimeout(() => {
//     resolve("resolved successfully");
// }, 10000);
// setTimeout()'s callback (which calls resolve()) is pushed into the Callback Queue.
// The Event Loop waits until the Call Stack is empty, then moves the callback to the Call Stack.



// 4. resolve("resolved successfully") Executes
// When resolve() executes, it fulfills the Promise.
// The resolved value is pushed into the Microtask Queue (not the Callback Queue).




// 5. await p1 Resumes Execution
// The Microtask Queue has higher priority than the Callback Queue, so load_data() moves back to the Call Stack.
// console.log("namaste1") prints.
// console.log(p1) prints "resolved successfully".




// 6. await p2 Executes Immediately
// javascript
// Copy
// Edit
// const p2 = await p;
// Since p is already resolved, execution continues immediately.
// console.log("namaste2") prints.
// console.log(p2) prints "resolved successfully".
// Final Answer:
// ✅ The setTimeout callback (resolve()) goes into the Callback Queue.
// ✅ The resolved Promise’s value moves into the Microtask Queue.
// ✅ The Microtask Queue has higher priority, so await p1 resumes before any Callback Queue tasks