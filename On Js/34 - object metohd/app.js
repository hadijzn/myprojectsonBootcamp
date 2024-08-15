// var user = {
//     username : 'ali'
//     ,age:55
// }
// Object.freeze(user.wallet=22)

// console.log(user);

// const user2 = {
//     username : 'alihsss',
//     age:32
// }
// const arr = [
//     ['username',
//         'hadijzn'
//     ],
//     ['age' , '31']
// ]
// اینجا تبدیل به key , value در جزوه نبود ببین در فیلم آموزشی و بنویس و یادبگیر


function handleform(e){
    e.preventDefault();
    // const username = document.getElementById("username")
    // const password = document.getElementById('password')

    // const arr = [[password.name,password.value],[username.name,username.value]]
    // console.log(arr);
    
    const form = document.getElementById('form-login')
    const formData = new FormData (form)
    
    for(element of formData.entries()){
        console.log(element);

    }

}



//  





























