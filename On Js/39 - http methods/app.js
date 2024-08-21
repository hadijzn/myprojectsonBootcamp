function getUserId(){
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const id=1444
            resolve(id)
            reject('i can`t get your id')
        },1000);
        
    })
    }

function CheckAdmin(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(id>1200)resolve('id is wright')
                else reject('youre not admin')
        },1000);
    })
}
getUserId().then((result) =>{
        console.log(result);
}).catch((err)=>{
        console.log(err);
        
})