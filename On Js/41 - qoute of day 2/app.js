// function mybutton(){
//         fetch("api.quotable.io/random",'GET')
//         var p2 = document.getElementById("p2").innerText()
//         }
function changeText(){
    data = fetch('api.quotable.io/random'|{
        method:'GET'
    })
.then(response => response.json())
.then(data => { document.getElementById('mybutton');data.newText;

}
)
}
document.getElementById("mybutton").addEventListener('click',changeText)
console.log(changeText());
