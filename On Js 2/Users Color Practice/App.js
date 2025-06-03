let users = [
    {name:'hadi',gender:'male'},
    {name:'ayda',gender:'female'},
    {name:'mamad',gender:'male'},
    {name:'arezu',gender:'female'},
    {name:'rasoul',gender:'male'},
    {name:'narges',gender:'female'},
    {name:'mmdmahdi',gender:'male'},
    {name:'mahdi',gender:'male'},
    {name:'fereshteh',gender:'female'},
    {name:'ali',gender:'male'},
    {name:'kosar',gender:'female'},
    {name:'mahdi',gender:'male'},
    {name:'fati',gender:'female'},
]

let maleList = document.getElementById('male-list')
let femaleList = document.getElementById('female-list')
let ShowNames = () =>{
    for(var i = 0;i < users.length;i++){
        if(users[i].gender==='male'){
            createMale(users[i])
        }
        else if(users[i].gender==='female'){
            createFemale(users[i])
        }
    }
}
let createMale = (data) =>{
    let male = document.createElement('li')
    male.textContent = data.name;
    maleList.appendChild(male)
}
let createFemale = (data) =>{
    let female = document.createElement('li')
    female.textContent = data.name;
    femaleList.appendChild(female)
}