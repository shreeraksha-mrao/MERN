const arr = [{id:'abc'},{id:'def'},{id:'jga'},{id:'lf1'},{id:'lkd2'}]

// TODO: to delete object with id jga

// let i = -1;
// let flag = 0;
// arr.forEach((e)=>{             // can use (e,i) for index
//     i++;
//     if(e.id === 'jga'){
//         flag = i;
//     }
// })

// arr.splice(flag,1);

// console.log(arr)


// const arr2 = [1,2,3,4,5,6,7,8,9,10];
// const arr3 = arr2.map(e => e * 2);


const arr4 = [1,2,3,4,5,6,7,8,9,10];
const arr5 = arr4.filter(e => e % 2 == 0);

console.log(arr5)
