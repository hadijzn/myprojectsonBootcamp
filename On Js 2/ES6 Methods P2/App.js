// numbers = [1,3,4,5,6,67,78]
// numbersWithTwo = numbers.map(function (item){
//     return item + 2
// })
// console.log(numbersWithTwo);



// numbersTwo = numbers.find(function (item){
//     return item === 5
// })
// console.log( Boolean(numbersTwo) );

// numbersTwo = numbers.some(function (item){
//     return item === 5
// })
// console.log(numbersTwo );

// numbersTwo = numbers.filter(function (item){
//     return typeof item === 'string'
// })
// console.log(numbersTwo);

// numbersTwo = numbers.filter(function (item){
//     return typeof item <= 9
// })
// console.log(numbersTwo);

// var products = [
//     {name : 'product1',price : 4},
//     {name : 'product2',price : 2},
//     {name : 'product3',price : 5},
//     {name : 'product4',price : 1},
//     {name : 'product5',price : 3},
// ]

// let filtererdproduct = () => {
// let productsTwo = products.filter(function (product){
//     return product.price < 10;
// })
 
// console.log(productsTwo);
// }

// let calckbasket = () => {
//     var total = 0
//     products.forEach(function (item){
//         total += item.price
//     })
//     console.log(total);
// }

// let unsortedArray = [45,22,44,21]
// console.log(unsortedArray.sort(function (a,b){
//     return a-b
// }));

// let letters = ['a','b','c','d'];
// let lettersTwo = letters.slice(0,3)
// let lettersTwo = letters.splice(1,2,'fjjfjfjf')
// console.log(letters);
// console.log(lettersTwo);
// let products = [
//     {name:'PS5'
//         ,price : 25000000
//         ,hasDiscount : false,
//         id:1 }
//     // 
//     //     {name:'PS4'
//     //     ,price : 23000000
//     //     ,hasDiscount : true,
//     //     id:2
//     // },
//     //     {name:'PS3'
//     //     ,price : 21000000
//     //     ,hasDiscount : false,
//     //     id:3
//     // },
//     //     {name:'PS2'
//     //     ,price : 19000000
//     //     ,hasDiscount : true,
//     //     id:4

// //     // }
// // ]
// let product = 
//     { name: 'PS5', price: 25000000, hasDiscount: false, id: 1 }
//     // { name: 'PS4', price: 23000000, hasDiscount: true, id: 2 },
//     // { name: 'PS3', price: 21000000, hasDiscount: false, id: 3 },
//     // { name: 'PS2', price: 19000000, hasDiscount: true, id: 4 }





// let CreatePtag = () => {
//     var pTag = document.createElement('p')
//     return pTag;
// }

// let showProduct = () => {
//     let listofKeyObjects = Object.keys(product);
//     listofKeyObjects.forEach(function (element)  {
//         var tag = CreatePtag();
//         tag.innerText = element + ':'+ product[element]
//         document.getElementById("#product") .appendChild(tag)
//     })
    
// }
// products.forEach(function (product){
//     const productCard = `
//     <div class = 'product'>
//     <p>${product.name}></p>
//     <p>${product.price}<p/>
//     <p>hasdiscount:${product.hasDiscount}<p/>
//     <button onclick = "addtoCart(${product.id})>'افزودن به سبد خرید </>button>
//     </div>
//     `
//     do
let products = [
    { name: 'PS5', price: 25000000, hasDiscount: false, id: 1,Image:'./1.webp' },
    { name: 'PS4', price: 23000000, hasDiscount: true, id: 2 ,Image:'./2.webp'},
    { name: 'PS3', price: 21000000, hasDiscount: false, id: 3 ,Image:'./3.webp'},
    { name: 'PS2', price: 19000000, hasDiscount: true, id: 4 , Image:'./4.webp'}
];


let CreatePtag = (text) => {
    var pTag = document.createElement('p');
    pTag.innerText = text;
    return pTag;
}

let ImageTag = (tagName) =>{
    return document.createElement(tagName) 
    // return imgStyle
    
}

let showProducts = () => {
    let container = document.getElementById('product');

    products.forEach(product => {
        Object.keys(product).forEach(key => {
            // if(product == 'name'||product =='price'|| product =='id')
            // {
            //     //  let tag = CreatePtag(`${key}: ${product[key]}`);
            //     let tag = CreatePtag(product[key])
            // }
            let tag = CreatePtag(`${key}: ${product[key]}`);
            let imgtag = ImageTag('img')
            if(key=='Image'){
                imgtag.setAttribute('src',product[key] )
            }
            container.appendChild(imgtag)
            container.appendChild(tag);
        });
        container.appendChild(document.createElement('hr')); 

    });
};
                
