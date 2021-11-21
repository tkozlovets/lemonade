'use strict'
//максимальное к-во мест в зале

const MAX_PLACES = 50
//зарезервированно каждое 3е место(подсказка:остаток от деления на 3 равен 0)

let firstPlace,
    secondPlace

// ввести номер места и записать в переменные firstPlace(введенное место) и в secondPlace следующее ближайшее местов интервале от 20 до 30
// если места выходят за рамки интервала / вывести алерт с предупреждением
// если место зарезервировано(тоесть каждое третее) выводим алерт с текстом 'место забронированно'


let placeNumber = +prompt('Введите номер места')

if (placeNumber > 20 && placeNumber < 30) {
    if (placeNumber % 3 !== 0) {
        firstPlace = placeNumber
        secondPlace = placeNumber + 2
    }
} else {
    console.log('wrong places')
}

console.log(firstPlace)
console.log(secondPlace)


