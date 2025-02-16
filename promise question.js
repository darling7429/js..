const value=5


function double(value){
    return new Promise((resolve, reject) => {
        resolve(value *2)
    })
}

function by3(data){
    return new Promise((resolve, reject) => {
        resolve(data * 3)
    })
}

function addten(data){
    return new Promise((resolve, reject) => {
        resolve(data + 10)
    })
}





double(value).then(function(data){
    
    return addten(data)
}).then(function(data){
    by3(data).then(function(data){
        console.log(data)
    })
    
})




// const delays = [4000, 6000, 8000];

// const fetchSimulator = (url, delay) => {
//   return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
// };

// const data1 = fetchSimulator('https://crocoder.dev/data1', delays[0]);
// const data2 = fetchSimulator('https://crocoder.dev/data2', delays[1]);
// const data3 = fetchSimulator('https://crocoder.dev/data3', delays[2]);

// Promise.all([data1, data2, data3])
//   .then((responses) => {
//     console.log('All data fetched:', responses);
//   });