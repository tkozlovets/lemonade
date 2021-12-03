// Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов
//  должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// let arr = []

// function fillArray(a, b)
// {
//     for (i=0; i < b; i++) {
//         arr[i]=a;
//         arr.length = b;
//    return arr.fill(a, 0, b)
// }
// }
// let fillArray = (a, b) => 
// {
//     for (i=0; i < b; i++) {
//         arr[i]=a;
//         arr.length = b;
//    return arr.fill(a, 0, b)
// }
// }
// console.log(fillArray(1, 9))

// task 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// const arr1 = arr.flat()
// const arr2 = arr1.flat()

// let result = arr2.reduce(function(sum, elem) {

//     return sum + elem;
// 	}); 

// console.log(result)

// task3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(x) {
//     if (x > 0 && x < 10) {
//     return true;
//     }
//     else
//     return false;
//     }

// console.log(isNumberInRange(5))

// task4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(x) {
//     if (x%2) {
//     return false;
//     }
//     else
//     return true;
//     }
// console.log(isEven(100))

// task5
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [1, 2, 3, 4, 5, 6]
// let arr1 = arr.filter(function(x) {
//     if (x%2 === 0)
//     return x;
//   });
//   console.log(arr1)

// task6
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей 
// (чисел, на которое делится данное число).


// function getDivisors(x) {
//     let arr = []
//     for(i = 1; i <= x; i++) 
//     if (x%i===0)
//    arr.push(i);   
//    return arr;
//  }
// console.log(getDivisors(6))

