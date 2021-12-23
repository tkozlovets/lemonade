function getNumber(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(23), 1000);
    })
}

getNumber().then(result => ++result).then(result=>console.log(result))

//перепишите код так чтобы он остался асинхронным / без использования async/await or Promise
//подсказка используем callback и замыкание
