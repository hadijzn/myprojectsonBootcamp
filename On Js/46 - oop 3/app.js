class user{
    #wallet
    constructor(name,age,wallet){
        this.name = name
        this.age = age;
        this.wallet = wallet
    }
    canShop(){
        if(this.wallet > 9){
            return true
        }
        else{
            return false
        }
    }
}
const userY = new user('mahdi',24,45)

console.log(userY.canShop());
