var products = [
   {name:"prodoct1" , price : 375},
   {name:"prodoct2" , price : 5},
   {name:"prodoct3" , price : 4},
   {name:"prodoct4" , price : 12}
]
function filterProducts(){
    var filteredProducts = products.filter(function(product){
        return product.price ===5
    })
    console.log(filteredProducts)
}

function calcbasket(){
    var total = 0;
    products.forEach(function(item){
    total = total + item.price
    })
    console.log(total)
}

function calcbasket(){
    var sumPrice = products.reduce(function(acc,current){
    return acc+current;
    })
    console.log(sumPrice)
}
  
var unsortedlist = [1,284,12,56,485,396,0]
console.log(unsortedlist.sort(function(a,b){
}))

var letters = ['a','b','c','d','e','f'];
var coppyArray = letters.slice(1,3);
console.log(coppyArray);

