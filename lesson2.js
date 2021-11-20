'use strict'

// const STEP = 10
// let someVariable = 5;
//


//
// let myVariable = 13
// myVariable=45
//
// let a,b,c
//
// a='ghghhg'
//
// b=78

// console.log('A'<'a')

// console.log('1'>=false)

// if(!isNaN(answer)){
//     if(answer+STEP<15&&) {
//         console.log('this is if')
//     }else if(answer+STEP>20){
//         console.log('this is else if')
//     }else{
//         console.log('this is else')
//     }
// }else{
//     console.log('this is not a number')
// }



// let answer = +prompt('Input number')
//
// if (answer > 5) {
//     console.log('first if')
// }
//
// if (someVariable === 5) {
//     console.log('first if')
// }


// if (answer < 3 || someVariable < 10) {
//     console.log('this is if')
// } else if (answer >= 10 && answer <= 20 && someVariable < 10) {
//     console.log('this is else if')
// } else {
//     console.log('this is else')
// }


// if(someVariable!==10){
//     console.log('this is !')
// }
// console.log(!!1)
// let empty =null
//
// if(someVariable!==null&&someVariable!==undefined){
//     console.log('yahoo')
// }

// console.log(someVariable??'yahoo')
//
// let count = someVariable??'yahoo'


// a+=10
//
// if(b===5)a-=5
// if(true){a-=5}

// let newVariable = (someVariable===5)?10:11

// console.log(newVariable)


let answer = prompt('Input website name')
let pass
const PORTAL = 'portal'
const ADMIN_PANEL = 'admin'
const PASS = 'admin'

if(answer===PORTAL || answer===ADMIN_PANEL){
    pass = prompt('Input account pass');
    (PASS===pass)?alert('welocme to poratl'):alert('wrong password')
}else{
    alert('404')
}














