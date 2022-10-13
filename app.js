let countPlus = document.querySelector('.btn')
let countZero = document.querySelector('.btn1')
let input = document.querySelector('.input')

countZero.style.backgroundColor = "green"

countPlus.addEventListener('click' , function(){
    localStorage.clickcount = Number(localStorage.clickcount)+1;
})

countZero.addEventListener('click' , function(){
    localStorage.clickcount = Number(localStorage.clickcount)*0; 
})


setInterval(() => {
    input.value =  localStorage.clickcount;
},1);


