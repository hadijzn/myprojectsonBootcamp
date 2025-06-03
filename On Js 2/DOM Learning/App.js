let handleClick = () =>{
    // let pValue = document.getElementsByTagName('p');
    // console.log(pValue);
    // console.log(document.getElementsByClassName('myInput'));
    // console.log(document.getElementsByName('myInput'));
    var pElement = document.createElement('p')
    let InputValue = document.getElementById('myInput').value;
    pElement.innerText = InputValue
    document.getElementById('box').appendChild(pElement)
    pElement.setAttribute('class','text-white')
    // pElement.setAttribute('myP','Myp value')
    // pElement.innerText = 'kefnwolnfnfnre'
    // console.log(pElement);   
}
let AddBlueClass = () =>{
   var box= document.getElementById('red-box')
   box.classList.remove('bg-red')
   box.classList.add ('bg-blue')

}
let AddRedClass = () =>{
    var box= document.getElementById('red-box')
    box.classList.remove ('bg-blue')
    box.classList.add('bg-red')

 
 }