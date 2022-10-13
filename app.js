let countPlus = document.querySelector('.btn')
let countZero = document.querySelector('.btn1')
let input = document.querySelector('.input')
countZero.style.backgroundColor = "green"
input.value =  localStorage.clickcount;

countPlus.addEventListener('click' , function(){
        input.value =  localStorage.clickcount;
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        
    })
    
countZero.addEventListener('click' , function(){
    localStorage.clickcount = Number(localStorage.clickcount)*0; 
    input.value =  localStorage.clickcount;
})

// function clickCounter() {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
// }


