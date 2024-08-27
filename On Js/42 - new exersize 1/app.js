// const btn = document.getElementById("button")
// btn.addEventListener('click',() => {
//     console.log('btn clicked');
// })

// btn.addEventListener('dblclick',() =>{
//     console.log("btn double clicked");
    
// })
const basketList = [];
let productList = []
const listofProdcuts = document.getElementById('product-list')

const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products")
    productList = data
    printProducts(data)
}

const printProducts = (data) =>{
    data.forEach(product => {
        const card = createProductCard(product);  
        listofProdcuts.appendChild(card);
        
    });
};
const createProductCard = (product) =>{
    const {id,title,price,image,rating} = product
    const card = document.createElement('div');
    card.innerHTML = `     
    <img src="${image}" alt ="",class="image-card">
    <p>${title.title}</p>
    <p>${price.price}</p>
    <p>${rating.rate}</p>
    <button onclick = addTObasket(${id})>add to basket</button>
  `
  return card;
}
const addTObasket = (id) =>{
    const alreadyHasItem = basketList.some((_item)=>{
        return _item.id === id;
    })
    if (!alreadyHasItem){
        const product = productList.find((_item )=>{
        return _item.id ==id;
        });
        basketList.push(product);
        updateBaksetCount();
    }
}
const updateBaksetCount = () => {
    const basketCount = document.getElementById('basket-count')
    basketCount.innerText=basketList.length
}

