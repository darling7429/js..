/*let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count);
})();
   */
  

function button_clicked(){
    let count=1;

    document.getElementById("clicks").addEventListener("click",function xyz(){
        alert("button is clicked" + count++  + "times ")
    })


    document.getElementById("reset").addEventListener("click",function(){
        count=0
        alert("count is set to zero ")
        count=1
    })
}

button_clicked()
