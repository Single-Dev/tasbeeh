let countPlus = document.querySelector('.btn')
let countZero = document.querySelector('.btn1')
let input = document.querySelector('.input')
countZero.style.backgroundColor = "green"
input.value =  localStorage.clickcount;

countPlus.addEventListener('click' , function(){
        input.value =  localStorage.clickcount;
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
              localStorage.clickcount = 0;
            }
          } else {
           alert("Sorry, your browser does not support web storage...")
          }
    })
    
countZero.addEventListener('click' , function(){
    localStorage.clickcount = Number(localStorage.clickcount)*0; 
    input.value =  localStorage.clickcount;
})

// function clickCounter() {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
// }


