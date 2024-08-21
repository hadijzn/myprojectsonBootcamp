function getUserid(){
        return new Promise ((resolve,reject)=>{
                setTimeout(() => {
                        const id = 1425;
                        resolve(id) 
                },1000);
        })
}

function checkAdmin(id){
        return new Promise((resolve,reject)=>{
                setTimeout(() => {
                       if (id>1000) resolve({ isAdmin:true });
                       else reject('its not admin') 
                }, 1000);
        })
}

// getUserid().then((result) => {
//         checkAdmin(result)
//         .then((response) => {
//                 console.log(response);
//         })
// }) 
// .catch((err) => {
//         console.log(err);
// }); روش 2 هندل کردن عملیات های async 





// روش 3 عملیات های هندل async 

async function start(){
        try{
            const result = getUserid()
            const response = await checkAdmin(result)
            console.log(result);
        }
        catch(err){
          console.log(err);
        }
}
start()

















