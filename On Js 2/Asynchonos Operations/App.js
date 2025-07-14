
// let showUsers = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     const option = {
//         method:'GET'
//     }
//     try{
//         const data = await fetch(url,option)
//         const response =  await data.json()
//         printUsers(response)
        
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }
// let printUsers  = (userlist) => {
//     userlist.forEach(user => {
//         // console.log('user : ',user.name);
//       const usernameTag =   createUser(user)
//     //   console.log(usernameTag);
//       document.getElementById('userList').appendChild(usernameTag)
//     });
// }
// let createUser = (user) => {
//     const ptag= document.createElement('p')
//     ptag.innerText = `user.name is ${user.name}`
//     return ptag;
// }

let getData = async () => {
     const url = "https://example.org/products.json";
     const Option = {
        method : 'POST'
     }

     try{
        const response = await fetch(url,Option)
         let json = await response.json()
    console.log(json);
     }

 
    
    catch(err){
        console.error(err);
        
     }
}