
// let pTag = () => {
//    let element =  document.createElement("p")
//     return element;
// }
let product = [ productname ='product1',price=10,description='this product is build for it-works,industries',id=1]
let showProduct = () => {
    product.forEach(element => {
        var pElement = document.createElement('p')
        pElement.innerText = element;
        document.getElementById('my-div').appendChild(pElement)
        // pElement.appendChild('mydiv')
    });
}
