var user =[
    {name:"hadi" ,gender:"male"},
    {name:"mahsa" ,gender:"female"},
    {name:"ali" ,gender:"male"},
    {name:"zahra" ,gender:"female"},
    {name:"amirhossein" ,gender:"male"},
    {name:"zohre" ,gender:"female"},
    {name:"hadi" ,gender:"male"},
    {name:"mahdie" ,gender:"female"},
    {name:"mahdi" ,gender:"male"},
]

var MaleList =document.getElementById('maleList')
var FemaleList = document.getElementById('femaleList')

function showUserList(){
    for (var i=0;i<user.length;i++)
        if (user[i].gender==='male'){
            createmale(user[i])
        }
        else if(user[i].gender==='female'){
            createfemale(user[i])
        }
}
function createmale(data){
    var male = document.createElement('li')
    male.textContent=data.name;
    MaleList.appendChild(male)
}
function createfemale(data){
    var female = document.createElement('li')
    female.textContent=data.name;
    femaleList.appendChild(female)
}