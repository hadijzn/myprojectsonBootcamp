let users = [
    {name:'hadi',gender:'male',id:2},
    {name:'ayda',gender:'female',id:3},
    {name:'mamad',gender:'male',id:4},
    {name:'arezu',gender:'female',id:5},
    {name:'rasoul',gender:'male',id:6},
    {name:'narges',gender:'female',id:7},
    {name:'mmdmahdi',gender:'male',id:8},
    {name:'mahdi',gender:'male',id:3},
    {name:'fereshteh',gender:'female',id:3},
    {name:'ali',gender:'male',id:3},
    {name:'kosar',gender:'female',id:3},
    {name:'mahdi',gender:'male',id:3},
    {name:'fati',gender:'female',id:3},
]



// let array = [1,2,3,4]
// var ArrayShift = () => {
//     // array.shift()
//     // array.unshift(2)
//     array.pop() // remove last item from arr
//     console.log(array);
// }
// concat : join two array , push , foreach,map,find ,findIndex ,
// prcatice find the biggest , smallest number in arr

let arr = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [];

// arr.forEach(function (number){
//     arr3.push(number*2)
// })
// console.log(arr3);

// arr.forEach(function (numb){
//     let x = numb * 3;
//     arr3.push(x)
// })
// console.log(arr3 );

// arr3 = arr.map(function (number){
//     return number * 2;
// })
// console.log(arr3);

// let FindFive ;
//    FindFive = arr.find(function (number){
//     return number ===5;
//    })
// console.log(FindFive);




//  arr3 = arr.concat(arr2)
// console.log("arr3 : ", arr3);
// arr.forEach(function(item){
//     console.log(item);
    
// });

// users.forEach(function (m){
//     console.log(m.name);
// });

// users.forEach(function (item){
//     console.log(item.gender);
    
// })

// users.forEach(function (numb,id){
//      numb = 2
//     console.log(numb * id);
    
// })

let UnsortedArr = [66,22,445,99,300,45,]
// let biggest ;
// let smallest ;


    // biggest = UnsortedArr.map(function (x){
      
    //   return x
    // })
    // console.log(biggest);
    // let FindBiggest = ()=> {
    //     UnsortedArr.forEach(function (big,item){
            
    //         if(arr.length < 100){
    //             console.log(item*2);
    //         }
    //         else if(arr.length > 2000){
    //             console.log(item );
                
    //         }
    //     })
    // }
    // FindBiggest()

    // let FindBiggest = (array) =>{
    //     var max = 0;
    //     a = array.length
    //     let counter;

    //     for (counter =0; counter < a;counter++){
    //         if(array[counter] > max ){
    //             max = array[counter]
    //         }
    //     }
    //     return max

    // } 
    // var response = FindBiggest(UnsortedArr)
    // console.log(response);
    
var small = null
let FindSmall = (arr) => {
   small = arr[0]
   arr.forEach((item) => {
    if (small > item){
        small = item
    }
   });
       return small

}
var response = FindSmall(UnsortedArr)
console.log(response);
