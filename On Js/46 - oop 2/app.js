
class car{
    constructor(model,year,color){
        this.model = model
        this.year = year
        this.color = color
    }
    start(){
            console.log(this.model , " is starting");
    }
    offroad(){
            console.log(this.model , 'in offroad now');
            
    }
    getMaxCapasity(){
        return `maxCapasity of ${this.model} is ${this.MaxCapasity}  `
    }
}
class electricCar extends car{
    constructor(model,year,color,batteryCapasity){
        super(model,year,color)
        this.batteryCapasity = batteryCapasity
    }
    getMaxCapasity(){
        return `maxCapasity of ${this.model} is ${this.MaxCapasity}  `
    }
    
}
class TruckCar extends electricCar{
    constructor(model,year,color,MaxCapasity){
        super(model,year,color)
        this.MaxCapasity = MaxCapasity
    }
    getMaxCapasity(){
        return `maxCapasity of ${this.model} is ${this.MaxCapasity} `
    }
}
const elecCar = new car('tesla w22',2022,'white',9000,)
const myTruck = new TruckCar(' 5000',2024,'blue-black',21)


// console.log(elecCar);

// elecCar.start()
// elecCar.offroad()

console.log(myTruck.getMaxCapasity());
