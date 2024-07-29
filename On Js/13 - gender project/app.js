var ListofUsers = [
    {user:"hadi",gender:"male"},
    {user:"maede",gender:"female"},
    {user:"ali",gender:"male"},
    {user:"reyhane",gender:"female"},
    {user:"soheil",gender:"male"},
    {user:"qazal",gender:"female"},
    {user:"mohammad",gender:"male"},
    {user:"batoul",gender:"female"},
    {user:"mahdi",gender:"male"},
    {user:"fateme",gender:"female"},
    {user:"hasan",gender:"male"},
    {user:"reza",gender:"male"},
    {user:"yalda",gender:"female"},
    {user:"hamed",gender:"male"},
    {user:"armin",gender:"female"},
    {user:"amirhossein",gender:"male"},
    {user:"mehdi",gender:"male"},
]
function genderCount(list){
    var maleLength=0;
    var femaleLength=0;
    for(var index = 0; index < list.length; index++){
        if(list[index].gender ==='male'){
          maleLength ++
        }
        else if(list[index].gender==='female'){
         femaleLength ++;
        };
    }
    return { maleLength : maleLength,
        femaleLength : femaleLength
    }
}

var counter =genderCount(ListofUsers)
    console.log(counter);