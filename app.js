let countPlus = document.querySelector('.btn')
let countZero = document.querySelector('.btn1')
let input = document.querySelector('.input')
countZero.style.backgroundColor = "green"
countPlus.addEventListener('click' , function(){
        input.value = parseInt(input.value) +1;
        countZero.style.display  = "block"
        return clickCounter()
})

countZero.addEventListener('click' , function(){
    input.value = 0
        localStorage.clickcount = Number(localStorage.clickcount)*0; 
})

function clickCounter() {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
}

input.value =  localStorage.clickcount;