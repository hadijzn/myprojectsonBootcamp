let products = [
    {name:'Product 1' ,price :24000,hasDiscount : true,id:1,Image:'./1.webp'},
    {name:'Product 2' ,price :25000,hasDiscount : false ,id:1,Image:'./1.webp'},
    {name:'Product 3' ,price :26000,hasDiscount : true ,id:1,Image:'./1.webp'},
    {name:'Product 4' ,price :26000,hasDiscount : false ,id:1,Image:'./1.webp'},

]
let createPtag = (text) => {
    var pTag = document.createElement('p')
    pTag.innerText = text;
    return pTag;
} 
    