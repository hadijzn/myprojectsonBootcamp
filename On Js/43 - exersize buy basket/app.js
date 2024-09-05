
const basketList = []
const listOfProducts = document.getElementById('product-list')
let productList = []
const getProducts = async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products")
    productList = data
    printProducts  (data);
}
function printProducts(data) {
    data.forEach((product) => {
        const card = CreateProductCard(product)
        listOfProducts.appendChild(card)
    })
}  
function CreateProductCard (product){
    const {id,rating,title,price,image} = product
   const card  = document.createElement('div')

   card.innerHTML = `
   <img src=${image} alt=${title} width:100px height:143px>
   <p>${title}</p>
   <p>price : ${price}</p>
   <p> rate:${rating.rate}</p>
   <button onclick = addtoBasket(${id.id})> add to basket</button>`;
   return card
}
const addtoBasket = (id) => {
    const alreadyHasItem = basketList.some((_item) => {
      return  _item.id===id
    })
    if(!alreadyHasItem){
        const product = productList.find((_item) => {
      return  _item.id == id
        });
    basketList.push(product)
    updateBasketCount()

    }
}
const updateBasketCount = () => {
    const basketCount = document.getElementById('basketCount')
    basketCount.innerText = basketList.length
}