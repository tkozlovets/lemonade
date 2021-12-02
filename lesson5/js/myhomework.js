// Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов
//  должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

let arr = []

// function fillArray(a, b)
// {
//     for (i=0; i < b; i++) {
//         arr[i]=a;
//         arr.length = b;
//    return arr.fill(a, 0, b)
// }
// }

let fillArray = (a, b) => 
{
    for (i=0; i < b; i++) {
        arr[i]=a;
        arr.length = b;
   return arr.fill(a, 0, b)
}
}
console.log(fillArray(1, 9))