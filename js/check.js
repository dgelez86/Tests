let numArray = [2,4,3,7,9,1]
// for (let i = 23; i >= 0; i--) 
//     numArray.push(i)


const sortArray = numArray => {

    for (let i = 0 ; i <= numArray.length-1 ; i++) {
        if (numArray[i] > numArray[i+1]) {
            let change = numArray[i+1]
            numArray[i+1] = numArray[i]
            numArray[i] = change
        }
        
    }

    return numArray

}

// const esPrimo = num1 => {
//     for (let i = 2 ; i < num1 ; i++)
//         if (num1 % i === 0) return console.log(`Number ${num1} is not prime`)
//     console.log(`Number ${num1} is prime`)
// }


// console.log(stringWordsToArray("hola mundo"))
// console.log(stringWordsToArray("hola mundo hola"))
// console.log(stringWordsToArray("hola mundo hola mundo"))
// console.log(repeatString("hola mundo", 4))
console.log(numArray)
console.log(sortArray(numArray))
