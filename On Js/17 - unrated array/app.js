
var  numbers = [4,6,3,67,90,45,32,89,21,84];
var MaxNumbers = numbers[3]
for (var i=1; i< numbers.length;i++){
    if(MaxNumbers < numbers[i])
    {MaxNumbers = numbers[i]}
}
console.log('maximum number in array :', MaxNumbers)
