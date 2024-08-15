// function Showlog(){
//     setTimeout(() => {
//         console.log('hi with delay');
        
//     },3000);
// }
// function startinvertal(){
//     setInterval(() => {
//         console.log(...'hiddddde me');
        
//     }, 1000);
// }

let number = 10;
const start = setInterval(() => {
    document.getElementById("paragraph").innerHTML='number2';
    number -=1
    clearInterval(start)
},1000);
console.log(start);
