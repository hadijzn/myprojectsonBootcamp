const listOfProducts = document.getElementById('Product-list')
const basketList = [];
productlist = [];
const GetProduct =  async () =>{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    productlist = data; // TODO : Beacause add to bakset not working properly 
    // and add here beacause id of product not add to mybasket
    createProduct(data)  
}
const createProduct = (data) => {
    data.forEach(product => {
      const card = createCard(product)
      listOfProducts.appendChild(card)
    //   console.log(card);
    });
}
const createCard = (product) =>{
    const {id,rating,price,title,image} = product
    const box = document.createElement('div')
    box.innerHTML = `
    <img src=${image} alt =${title} />
    <p>${title} </p>
    <p>${price} </p>
    <p>${rating.rate} </p>
    <button onclick=addTobasket(${id})> add to basket</button>
    `
    return box;
}
const addTobasket = (id) => {
    const alreadyHasItem = basketList.some((_item)=>{
     return _item.id === id;
    });
    if(!alreadyHasItem){
      const product = productlist.find((_item)=>{
           return _item.id == id;
        });
         basketList.push(product);
         updateBasketCount();
    }   
    
}
const updateBasketCount = () =>{
    const basketCount = document.getElementById('basket-count')
    basketCount.innerHTML = basketList.length;
}