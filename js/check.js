let numArray = []
    for (let i = 23; i >= 0; i--) 
        numArray.push(i)

// let numArray2 = [2,4,3]


const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = [], pos = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (i % 2 == 0) {
            arrayNumerosPares[pos] = i
            pos++
        }
    }
    return arrayNumerosPares
}

console.log(obtenerPares(numArray))

