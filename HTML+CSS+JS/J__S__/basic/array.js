// // Array in JS
// //   ->As compare to other programming languages array in JS is somewhat different
// //   ->In JS it is enclosed within Square brackets '[ ]'
// //   ->In JS we can store any type of element into same array

//   var arr=["Ram",18,'A',19]
//   for(var i=0;i<arr.length;i++)
//   {
//     console.log(arr[i])
//   }

// var myArray = [1, 2, 3, 4, 5]
// myArray.forEach(function(element) {console.log(element);})

// var myArray = [1, 2, 3, 4, 5]
// for (var element of myArray) {
//     console.log(element)
// }

// var myArray = [1, 2, 3, 4, 5];
// var multipliedArray = myArray.map(function(element) {
//     return element * 2;
// });
// console.log(multipliedArray);

// var myArray = [1, 2, 3, 4, 5];
// var sum = myArray.reduce(function(acc, cur) {
//     return acc + cur;
// }, 0);
// console.log(sum); // 15

// var currentDate = new Date();
// console.log(currentDate);

// console.log(Math.random());
// console.log(Math.floor(3.8));
// console.log(Math.ceil(3.8));
// console.log(Math.min(3,4,2,1));
// console.log(Math.max(3,4,2,1));
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Number("3.14"));
// console.log(Number(true));
// console.log(Number("Ram"));

// console.log(Number.MAX_VALUE);
// // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE);
// // Output: 5e-324

// console.log(1 / 0);
// // Output: Infinity
// console.log(-1 / 0);
// // Output: -Infinity

// console.log((3.1415926535897932384626433832795).toFixed(5));
// // Output: "3.14"

arr=[1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);