// const sumarArray = arrayNumeros => arrayNumeros.reduce((result, el) => result + el)

let arrayNumeros = []
for (let i = 0; i <= 23; i++) 
    arrayNumeros.push(i)

// console.log(sumarArray(arrayNumeros))

// const stringToArray2 = phrase => {

// 	let arrayPosition = 0, wordsOnArray = []
// 	for (let i = 0 ; i < phrase.length ; i++) {
// 		if (wordsOnArray[arrayPosition] === undefined) wordsOnArray[arrayPosition] = ""
// 		if (phrase[i] === " ") {
// 			arrayPosition++
// 			continue
// 		}
//     	wordsOnArray[arrayPosition] += phrase[i]
// 		if (phrase[i] === " ") arrayPosition++
//     }
// 	return wordsOnArray

// }

// function separarPalabras (string) {
//     //declaramos una variable para guardar la arrayPositionición del primer caracter que no es espacio
//     spacearrayPosition=0;
//     //declaramos un array vacio para guardar el array de palabras que hay que devolver
//     arrayPalabras = [];

//     //recorremos el string en busca de espacios
//     newString="";
//     for (let i=0; i<string.length+1;i++) {
//         if (string[i]===" "||string[i]===undefined ){
            
//             arrayPalabras[arrayPalabras.length] = newString;
//             newString="";
//             //cambiamos la arrayPositionición del último espacio encontrado
//             spacearrayPosition=i+1;
//         }
//         else newString+=string[i];
//     }
//     return arrayPalabras;
// }

const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = []
    arrayNumeros.forEach(el => {
        if (el % 2 == 0) arrayNumerosPares.push(el)
    })
    return arrayNumerosPares
}


// console.log(stringToArray("hola mundo"))
// console.log(stringToArray("hola mundo hola"))
// console.log(stringToArray("hola mundo hola mundo"))
// console.log(stringToArray2("hola mundo"))
// console.log(stringToArray2("hola mundo hola"))
// console.log(stringToArray2("hola mundo hola mundo"))
// console.log(separarPalabras("hola mundo"))
// console.log(separarPalabras("hola mundo hola"))
// console.log(separarPalabras("hola mundo hola mundo"))
// console.log(repeatString("hola mundo", 4))
console.log(obtenerPares(arrayNumeros))
