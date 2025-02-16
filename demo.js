
/*function test() {
    let a = 'Hello';

    if (true) {
        let a = 'Bye';  
        console.log(a); 
    }

    console.log(a); 
}

test(); */



let view;
function likeTheVideo(){
    let called = 0;

    return function(){
        if(false){
            console.log("Already Subscribed");
        }
        else{
            view="Roadside Coder"
            called++;
            console.log( "Subscribe to", view)
        }
    }
}

let isSubscribe = likeTheVideo
isSubscribe()()

//isSubscribe() // Subscribe to Roadside Coder
//isSubscribe() // Already Subscribed

