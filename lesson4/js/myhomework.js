//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)
//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map
//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//
//let arr =[2, 6, 7, "a", "b", "q"]
// function sortTheArray(someArray){
//     // ваш код
// }
//
// 

// Задача 1, reduce

// let arr = [1,33,456,986,122]

// let sum = arr.reduce((total, item) => {
//         total += item*item;
//         return total; 
//     })
// console.log(sum)

// Задача 2, map

// let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
// let newArr = arr.map(arrItem => {
//     return 'My name is' + ' ' + arrItem
// })
// console.log(newArr)

// Задача 3, sort
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки

// let arr = ["b", 6, "a", "q", 7, 2]

// let sortedArr = arr.sort()
    
// console.log(sortedArr)

let arr = ["b", 6, "a", "q", 7, 2]

let arr1 = arr.filter(function(item){return typeof item == 'number';});
let arr2 = arr.filter(function(item){return typeof item == 'string';});
arr1.sort(function(a, b){
    if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
   });
arr2.sort()
let arr3 = arr1.concat(arr2);
console.log(arr3)



