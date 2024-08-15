function getUserId(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const id=1233
           if(id < 1000){
            resolve(id)
           }else{
            reject('thats wrong')
           }
        });
    },1000)
}

// getUserId() .then((result) =>{
//     console.log(result);

// })

// getUserId() .catch((result) =>{
//     console.log(result);

// })

async function start(){
    try {
        const user = await getUserId()
        console.log(user)
    } catch(err){
        console.log('erro');
    }
}    
start()