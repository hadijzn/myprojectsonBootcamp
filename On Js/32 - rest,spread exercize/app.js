const user = {
           usersname:'amirhossein',
           age:12,
           address:'isf dorcheh aseman alley'
}
// const copyUser = {...user,
//            age:15
//            ,address:'tehran'
// }
// console.log('user:',user);
// console.log('copyuser:',copyUser);

// const arr = [1,2,3,[4,5,6]]
// console.log('arr',arr.flat(1));

// const arr = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = arr.concat(arr2);
// console.log(arr3);

// const arr = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [...arr,...arr2]
// console.log(arr3);

// function test(arg1,arg2,arg3){
//         console.log(arg1,arg2,arg3);
// }
// test()

// function test(...args){
//         console.log(...args);
// }
// test(1,2,3,4,5,6)


// function checkStr (params){
//         console.log(...params);
// }
// checkStr('thhhh')
// checkStr('1285757')

// function test(p1,p2){
//         console.log(p1);
//         console.log(p2);
// }
// test(...[1,2])

const copyUser = Object.assign<(user[
        user.age=25
])
console.log(copyUser);

const hasAge = Boolean(user.age);
console.log(hasAge);

console.log(Object.hasOwn(user,"wallet"));