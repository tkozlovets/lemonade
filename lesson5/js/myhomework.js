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

// task 7
// Создайте функцию, которая получает два параметра – число и степень числа. 
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function powNumber(x, y) {
//     return x**y;
// }
// console.log(powNumber(2, 3)) 

// task 8
// Функция принимает параметр - возраст пользователя. 
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function userAge (x) {
//     if (x <= 16)
//         console.log('Вы еще молоды')
//         else
//         console.log('Добро пожаловать')  
// }
// userAge(17)

// task 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. 
// В таком случае выведите сообщение – “Введите возраст”. 
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function userAge (x) {
    
//     if (x <= 16) {
//         console.log('Вы еще молоды')
//     }
//     else if (x > 16)
//      {
//             console.log('Добро пожаловать')
//      }
//     else if (x==null || isNaN(x))
//     {
//         console.log('Введите возраст')   
//     } 
// }
    
// userAge('g')

// Task 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа. 
// Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

// function countArr (a) {

//     if (a==null)
//     {
//     console.log("No")
//     }
// else 
// {
// return a.length
// }
// }
// console.log (countArr())

// task 11
// Пользователь вводит числа. 
// Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7.
// Если 7, 8, 9 – то возвращает соответственно 7, 8 или 9. Реализуйте решение с несколькими return.


// function output(x) {
//     if (x > 10)
//     { return(x*x) 
//     }
//     else if(x < 7)
//     {
//       return('число меньше 7')
//     }
//     else if(x >= 7 || x <= 10)
// {
//     return x 
// }

// }
// console.log(output(5))

// task 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную 
// функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно 
// строку с заглавной первой буквой.

// let str 

// function ucFirst(str) {
//     if (!str) 
//     {return str;
//     }
//   {return str[0].toUpperCase() + str.slice(1, 6) + ' ' + str[7].toUpperCase() + str.slice(8, 10) + ' ' + 
//   str[11].toUpperCase() + str.slice(12) 
// }
// }
// console.log(ucFirst("привет как дела"))

// task 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

let str = 'var_text_hello'

// task 14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false. Показать решение.

// let array = ['привет', 'как', 'дела']
// let text = 'привет'
// let result = array.filter(function(array)
// {
//     return array[i] == text 
// });
// console.log(result)





// task 15
// Дана строка, например, '123456'. Сделайте из нее '214365'.

// let str = '123456'

// let arr = str.split('')

// let result = arr.map((item, index, array) => {
// if (index%2 !== 0) {
//     return item = array[index - 1];
// } 
// return item = array[index + 1];
// });

// let str1 = result.join('')

// console.log(str1)
