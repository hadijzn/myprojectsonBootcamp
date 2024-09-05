class user{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    talking() { 
         console.log(`${this.name} talking about anything`)
         
    }
    sleeping(){
    console.log(`${this.age}`);
        
    }
    workout(){
        console.log(`${this.name} go to gym and workout`);
        
    }
    
}

let userOne = new user('hadi',21,'male');
let userTwo = new user('reyhane',19,'female')
let userThree = new user('amirhossein ',13,'male')


userOne.talking()
userOne.sleeping()
userThree.workout()
