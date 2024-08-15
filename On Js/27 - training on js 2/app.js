var userAge = prompt('please give me your birthdate to i calculate how age you are in year of 1430')

var ageOn1430 = 1430 - userAge

if(isNaN(ageOn1430)){
   console.log('this is not wright');
}
else{
    console.log('your age is ' + ageOn1430);
}

if(userAge>0)
    console.log('your age is not wrgiht')

