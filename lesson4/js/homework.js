//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)

//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map

//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки

//let arr =[2, 6, 7, "a", "b", "q"]

function sortTheArray(someArray){
    // ваш код
}
sortTheArray(["b", 6, "a", "q", 7, 2])


// let arr = [1,899,456,66,122]
//
// let sum = arr.reduce((acc, cur) => {
//     console.log(acc)
//     return {
//         ...acc,
//         [cur]:cur
//     }
// },{})
//
//
// for(let i = 0;i<=arr.length;i++){
//
// }
//
// console.log(sum)

let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']

let newArr = arr.map(arrItem => {
    return 'My name is' + ' ' + arrItem
})

console.log(newArr)
