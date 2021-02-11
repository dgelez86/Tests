//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Variables
//----------------------------------------------------------------------------------------------------------------------------
// 1. Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor
// 2. Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true, booleano2 = false
// 3. Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14
// 4. Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI*2
// 13. Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera
let variableValorNumerico = 12345
// 14. Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
const MI_NOMBRE = "Daniel Garcia"
// 15. Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MI_NUM_FAV = 6
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Booleans
//----------------------------------------------------------------------------------------------------------------------------
// 5. Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2
// 6. Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1
let booleanoNot = !booleano1
// 7. Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
// let booleanoMix0 = booleano1 || booleano2 && (booleano1 || (!booleano1 && !booleano2))
// 16. Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2
// let booleanoOr = booleano1 && booleano2
// 17. Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
let booleanoMix1 = (booleano1 && TAU/2 === PI) || (variableValorNumerico >= MI_NUM_FAV)
// 18. Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9
let seisNoEsNueve = (6 !== 9)
// 19. Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < !(MI_NUM_FAV * TAU)
let booleanoMix2
if (variableValorNumerico > 0) booleanoMix2 = variableValorNumerico
if (variableValorNumerico < !(MI_NUM_FAV * TAU)) booleanoMix2 = variableValorNumerico
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Operators
//----------------------------------------------------------------------------------------------------------------------------
// 8. Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
let incrementarDesp = 2
let resultadoDesp = incrementarDesp++
// 9. Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2
let resultadoAntes = ++incrementarAntes
// 10. Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10
for (let contarHasta10_2 = 0 ; contarHasta10_2 <= 10 ; contarHasta10_2++) {}
// 20. Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
let valorSuma = MI_NUM_FAV + variableValorNumerico
// 21. Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
let valorResta = MI_NUM_FAV - variableValorNumerico
// 22. Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
let valorMultiplicación = MI_NUM_FAV * variableValorNumerico
// 23. Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
let valorDivisión = MI_NUM_FAV / variableValorNumerico
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Loops
//----------------------------------------------------------------------------------------------------------------------------
// 11. Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0, postJ = 0
for (let i = 0 ; i <= 11 ; i++) {
    postI = postJ++
}
// 12. Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
let sumaPares = 0
for (let i = 0 ; i <=10 ; i++) {
    if (i%2 === 0) sumaPares += i
}
// 24. Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0
while (contarHasta10 <= 10) contarHasta10++ 
// 25. Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
let preI = 0, preJ = 0
for (let i = 0 ; i <= 11 ; i++) {
    postI = ++postJ
}
// 26. Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)
let sumaImpares = 0
for (let i = 0 ; i <=10 ; i++) {
    if (i%2 !== 0) sumaImpares += i
}
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Arrays
//----------------------------------------------------------------------------------------------------------------------------
// 1. Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = []
// 2. Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = []
for (let i = 0; i <= 9; i++) 
    arrayNumeros[i] = i
// 3. Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = []
for (let i = 0; i <= 10; i++)
    if (i % 2 == 0) {
        let pos = 0
        arrayNumerosPares[pos] = i
    } 
// 4. Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]]
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Functions
//----------------------------------------------------------------------------------------------------------------------------
// 5. Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
const addFunction = (num1, num2) => num1 + num2
// 6. Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
const powerFunction = (num1, num2) => Math.pow(num1, num2)
// 7. Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
const stringWordsToArray = phrase => {
	let arrayPosition = 0, wordsOnArray = []
	for (let i = 0 ; i < phrase.length ; i++) {
		if (wordsOnArray[arrayPosition] === undefined) wordsOnArray[arrayPosition] = ""
    	wordsOnArray[arrayPosition] += phrase[i]
		if (phrase[i] === " ") {
			let deleteSpace = wordsOnArray[arrayPosition]
			wordsOnArray[arrayPosition] = ""
			for (let i = 0 ; i < deleteSpace.length-1 ; i++) {
				wordsOnArray[arrayPosition] += deleteSpace[i]
			}
			arrayPosition++
		}
    }
	return wordsOnArray
}
// 8. Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
const repeatString = (phrase, times) => {
    return phrase.concat(" / ").repeat(times)
}
// -------------------------const repeatStringRecursive = (phrase, times) =>
//     if (times <= 0) return phrase.concat(repeatStringRecursive(phrase, times)
// 9. Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
const esPrimo = num1 => {
    for (let i = 2 ; i < num1 ; i++)
        if (num1 % i === 0) return console.log(`Number ${num1} is not prime`)
    console.log(`Number ${num1} is prime`)
}
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Arrays and functions
//----------------------------------------------------------------------------------------------------------------------------
// 10. Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
// ----------------------------------const ordenarArray = arrayNumeros => {

// }
// 11. Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = []
    arrayNumeros.forEach(el => {
        if (el % 2 == 0) arrayNumerosPares.push(el)
    })
    return arrayNumerosPares
}

const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = []
    arrayNumeros.map(el => {
        if (el % 2 == 0) arrayNumerosPares.push(el)
    })
    return arrayNumerosPares
}
// 12. Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
let array = [0, 1, 2]
const pintarArray = array => console.log(`[${array.toString()}]`)
// 13. Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
const arrayMapi = (array, function1) => array.map(function1)
// 14. Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
// ------------------------const eliminarDuplicados = array => 
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Projekt arrays
//----------------------------------------------------------------------------------------------------------------------------
// 15. Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = []
for (let i = 0; i <= -9; i--) 
    arrayNumerosNeg.push(i)
// 16. Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ["Hola", "Mundo"]
// 17. Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]
// 18. Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, "Daniel"], [225, "Garcia"], [298, "Collado Villalba"]]
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Projekt functions
//----------------------------------------------------------------------------------------------------------------------------
// 19. Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
const multiply = (num1, num2) => num1 * num2
// 20. Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
const divide = (num1, num2) => num1 / num2
// 21. Cparrea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
const esPar = num1 => {
    let esPar = false
    if (num1 % 2 == 0) esPar = true
    return esPar
}
// 22. Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
const addFunction = (num1, num2) => num1 + num2
const minusFunction = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
let arrayFunciones = [addFunction, minusFunction, multiply, divide]
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Projekt arrays and functions
//----------------------------------------------------------------------------------------------------------------------------
// 23. Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
// --------------------------------const ordenarArray2 = arrayNumeros => 
// 24. Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
const obtenerImpares = arrayNumeros => {
    let arrayNumerosImpares = []
    arrayNumeros.arrayNumeros.forEach(el => {
        if (el % 2 != 0) arrayNumerosImpares.push(el)
    });
    return arrayNumerosImpares
}
// 25. Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const sumarArray = arrayNumeros => arrayNumeros.reduce((result, el) => result + el)
// 26. Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24







       
