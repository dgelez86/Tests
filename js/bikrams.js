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
let arrayNumerosPares = [], pos = 0
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        arrayNumerosPares[pos] = i
        pos++
    }
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
	let arrayOfWords = []
	arrayOfWords[arrayOfWords.length] = ""
	for (let i = 0 ; i < phrase.length ; i++) {
		if (phrase[i] === " ") {
			arrayOfWords[arrayOfWords.length] = ""
		} else {
			arrayOfWords[arrayOfWords.length-1] += phrase[i]
		}	
    }
	return arrayOfWords
}
// 8. Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
// const repeatString = (phrase, times) => phrase.concat(" / ").repeat(times)
const repeatString = (phrase, times) => {
    let phraseConcat = ""
    for (let i = 0 ; i < times ; i++)
        phraseConcat += phrase + ". "
    return phraseConcat
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
// PENDIENTE REVISAR ---------------------------------------------------------------------------------------------------------
// 10. Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
const sortArray = numArray => {
    for (let i = numArray.length-1 ; i >= 0 ; i--) {
        if (numArray[i] < numArray[i-1]) {
            let change = numArray[i-1]
            numArray[i-1] = numArray[i]
            numArray[i] = change
        }
    }
}

// }
// 11. Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
// const obtenerPares = arrayNumeros => {
//     let arrayNumerosPares = []
//     arrayNumeros.forEach(el => {
//         if (el % 2 == 0) arrayNumerosPares.push(el)
//     })
//     return arrayNumerosPares
// }
// const obtenerPares = arrayNumeros => {
//     let arrayNumerosPares = []
//     arrayNumeros.map(el => {
//         if (el % 2 == 0) arrayNumerosPares.push(el)
//     })
//     return arrayNumerosPares
// }
const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = [], pos = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (i % 2 === 0) {
            arrayNumerosPares[pos] = i
            pos++
        }
    }
    return arrayNumerosPares
}
// 12. Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
let array = [0, 1, 2]
const pintarArray = array => console.log(`[${array.toString()}]`)
// PENDIENTE REVISAR ---------------------------------------------------------------------------------------------------------
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
// PENDIENTE REVISAR ---------------------------------------------------------------------------------------------------------
// 24. Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
// const obtenerImpares = arrayNumeros => {
//     let arrayNumerosImpares = []
//     arrayNumeros.arrayNumeros.forEach(el => {
//         if (el % 2 != 0) arrayNumerosImpares.push(el)
//     });
//     return arrayNumerosImpares
// }
const obtenerPares = arrayNumeros => {
    let arrayNumerosPares = [], pos = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (i % 2 !== 0) {
            arrayNumerosPares[pos] = i
            pos++
        }
    }
    return arrayNumerosPares
}
// PENDIENTE REVISAR ---------------------------------------------------------------------------------------------------------
// 25. Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const sumArray = numArray => numArray.reduce((result, el) => result + el)
// 26. Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// Classes
//----------------------------------------------------------------------------------------------------------------------------
// 1.- Crea el objeto Coche con las siguientes propiedades: marca, modelo y matricula y los métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}
let Coche = {
    marca: "seat",
    modelo: 2005,
    matricula: "2005xyz",
    acelerar: function() {
        console.log("a todo gas")
    },
    frenar: function() {
        console.log("cuidado con la abuelita en el paso de cebra")
    }
}
// 2.- Crea la clase Turismo con las siguientes propiedades: marca, modelo y matricula declaradas en el constructor y los métodos: acelerar {imprimirá por consola "a todo gas"} y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}
class Turismo {
    constructor(marca, modelo, matricula) {
        this.marca = marca
        this.modelo = modelo
        this.matricula = matricula
    }
    acelerar() {
        console.log("a todo gas")
    }
    frenar() {
        console.log("cuidado con la abuelita en el paso de cebra")
    }
}
let car1 = new Turismo("seat megane", 2005, "2005xyz")
// 3.- Crea una nueva instancia de Turismo (una instancia se crea con new Turismo(/Valores de las propiedades/) llamada miTurismo cuyas propiedades sean: marca: "Asiento", modelo: "Leon", matricula: "1234AAA"
let miTurismo = new Turismo("Asiento", "Leon", "1234AAA")
// 4.- Crea una nueva instancia de Turismo (una instancia se crea con new Turismo(/Valores de las propiedades/) llamada miSegundoTurismo cuyas propiedades sean: marca: "Vuelve", modelo: "XC90", matricula: "1540GAB"
let miSegundoTurismo = new Turismo("Vuelve", "XC90", "1540GAB")
// 5.- Crea una nueva clase Persona con las siguientes propiedades: nombre, apellidos, edad, gustosMusicales y los métodos: envejecer {aumentará en 1 la edad}, nuevoGusto {aceptará como argumento un string y lo añadirá al array gustosMusicales}
class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.gustosMusicales = gustosMusicales
    }
    envejecer() {
        this.edad++
    }
    nuevoGusto(newMusic) {
        this.gustosMusicales.push(newMusic)
    }
}
// 6.- Crea una nueva instancia de Persona llamada rockero cuyas propiedades sean: nombre: "Freddie", apellidos: "Mercury", "edad": 45, gustosMusicales: ["Queen", "AC/DC"]
let rockero = new Persona("Freddie", "Mercury", 45, ["Queen", "AC/DC"])
// 7.- Crea una función aplicar__nuevoGusto que añada a rockero el gustoMusical "My Chemical Romance" Que no te despiste que se pida una función, solo es para poder pasar el test, aprovecha el método nuevoGusto
const aplicar__nuevoGusto = nuevoGusto => rockero.nuevoGusto(nuevoGusto)
aplicar__nuevoGusto("My Chemical Romance")
// 8.- Crea un array Perro que contenga los valores: [nombre, raza, función popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}]
let nombre = "nombre", raza = "raza"
const popo = () => `Ha hecho ${Math.random() * 3} caquitas`
let perro = [nombre, raza, popo]
// 9.- Crea el objeto Perrito con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}
Perrito = {
    nombre: "nombre",
    raza: "raza",
    popo: function(){
        return `Ha hecho ${Math.random() * 3} caquitas`
    }
}
// 10.- Crea la clase Perrazo con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}
class Perrazo {
    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
    }
    popo() {
        return `Ha hecho ${Math.random() * 3} caquitas`
    }
}
// 11.- Crea una nueva instancia de Perrazo llamada lebrelazo cuyas propiedades sean: nombre: "Gus", raza: "Lebrel"
let lebrelazo = new Perrazo("Gus", "Lebrel")
// 12.- Crea la clase Husky que extienda la clase Perrazo (class Husky extends Perrazo) y añade la propiedad: heterocromia (booleano), la propiedad raza siempre será "Husky" y el método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)
class Husky extends Perrazo {
    constructor(nombre, raza = "Husky", heterocromia) {
        super(nombre, raza)
        this.heterocromia = heterocromia
    }
    tieneHeterocromia() {
        return this.heterocromia ? "si" : "no"
    }
}
// 13.- Crea una nueva instancia de Husky llamada miHusky cuyas propiedades sean: nombre: "Alaska", "heterocromia": true
miHusky = new Husky("Alaska", "Husky", true)
// 14.- Crea la clase Coordenadas con las propiedades: x, y
class Coordenadas {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
// 15.- Crea la clase Jugador con las propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas), direccion (instancia de coordenadas) vida y los métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}
class Jugador {
    constructor(posicion, fuerza, velocidad, direccion, vida) {
        this.posicion = posicion
        this.fuerza = fuerza
        this.velocidad = velocidad
        this.direccion = direccion
        this.vida = vida
    }
    moverse() {
        this.posicion.x += this.velocidad.x * this.direccion.x
        this.posicion.y += this.velocidad.y * this.direccion.y
    }
    perderVida() {
        this.vida -= 1
    }
}
jugador1 = new Jugador(new Coordenadas(10, 10), 20, new Coordenadas(10, 15), new Coordenadas(15, 10), 50)
// 16.- Crea un array de instancias de Jugador llamado jugadores
let jugadores = []
jugadores.push(jugador1)
// 17.- Crea el objeto FrameworksJavaScript con la propiedad: array frameworks y el método: generarFramework {añade al array frameworksJavaScript el string (randomString() + ".js")}
let FrameworksJavaScript = {
    arrayFrameworks: [],
    generarFramework: function() {
        this.arrayFrameworks.push(`${randomString()}.js`)
    }
}
// 18.- Crea la clase Error_ con las propiedades: codigo, descripcion, nombre y el método: imprimirError {se imprime a si mismo (this) por pantalla}
class Error_ {
    constructor(codigo, descripcion, nombre) {
        this.codigo = codigo
        this.descripcion = descripcion
        this.nombre = nombre
    }
    imprimirError() {
        console.log(this)
    }
}
// 19.- Crea la clase Huevera con las propiedades: huevosMaximos, huevos y el método comprarHuevos {acepta como argumento un número y añade ese número de huevos}
class Huevera {
    constructor(huevosMaximos, huevos) {
        this.huevosMaximos = huevosMaximos
        this.huevos = huevos
    }
    comprarHuevos(huevos) {
        if (this.huevosMaximos >= this.huevos + huevos) this.huevos += huevos
    }
}
// 20.- Crea el objeto Nevera con las propiedades: array productos y el getter numProductos {devuelve la suma del número de productos}
let Nevera = { 
    arrayProductos: [],
    numProductos: function() {
        return this.arrayProductos.reduce((el, acc) => acc += el)
    }
}
// 21.- Crea el objeto Congelador con las propiedades: array productos y el setter compra {acepta un array como argumento y añade cada elemento a this.productos}
let Congelador = {
    arrayProductos: [],
    compra: function(array) {
        this.arrayProductos += [...array]
    }
}
// 22.- Crea el objeto Pecera con las propiedades: array peces y el getter numPeces {retorna el número de peces} y el setter nuevosPeces {acepta como argumento un array y añade cada elemento a this.peces}
let Pecera = {
    arrayPeces: [],
    numPeces: function() {
        return this.arrayPeces.length
    },
    nuevosPeces: function(array) {
        this.arrayPeces += [...array]
    }
}
// 23.- Crea la clase Lavavajillas con las propiedades: carga (objeto {platos: numPlatos, vasos: numVasos}), el setter nuevaCarga {acepatará como argumento un objeto {platos: numPlatos, vasos: numVasos} y actualizará carga, para llamarlo se podrá utilizar el operador de propagación, si una variable queda sin definir, su valor no deberá cambiar}
class Lavavajillas {
    constructor(carga) {
        this.carga = carga
    }
    nuevaCarga(objeto) {
        this.carga = {...this.carga,...objeto}
    }
}
let objetos = {
    numPlatos: 10,
    numVasos: 17
}
let lav1 = new Lavavajillas(objetos)
// 24.- Crea la clase ColeccionLibros con la propiedad array libros y el getter ultimaAdquisicion {devuelve el último elemento de this.libros}
class ColeccionLibros {
    constructor(...libros) {
        this.arraylibros = [...libros]
    }
    ultimaAdquisicion() {
        return this.arraylibros[this.arraylibros.length-1]
    }
}
// 25.- Crea la clase Humano con las propiedades: nombre y nacimiento además, deberá tener un getter edad {devuelva new Date().getFullYear() - nacimiento} y un setter edad(nuevaEdad) {cambiará nacimineto por new Date().getFullYear() - nuevaEdad}
class Humano {
    constructor(nombre, nacimiento) {
        this.nombre = nombre
        this.nacimiento = nacimiento
    }
    getEdad() {
        return new Date().getFullYear() - this.nacimiento
    }
    setEdad(nuevaEdad) {
        this.nacimiento = new Date().getFullYear() - nuevaEdad
    }
}
// 26.- Crea la clase Horno con las propiedades: horaInicio (instancia de Tiempo(horas, minutos) ya declarado en JS/functions.js) y horaFin (instancia de Tiempo(horas, minutos)), el getter tiempoPasado {devolverá ("Llevamos " + TiempoAString(new Tiempo(horaActual - horaInicio, minutoActual - minutoInicio))) y el getter tiempoRestante {devolverá ("Quedan " + TiempoAString(new Tiempo(horaFin - horaActual, minutoFin - minutoActual))) }
class Horno {
    constructor(horaInicio, horaFin) {
        this.horaInicio = horaInicio
        this.horaFin = horaFin
    }
    tiempoPasado() {
        let current = {
            horas: new Tiempo(23, 23).horas - this.horaInicio.horas,
            minutos: new Tiempo(23, 23).minutos - this.horaInicio.minutos
        }
        return TiempoAString(current)
    }
    tiempoRestante() {
        let current = {
            horas: this.horaFin.horas - new Tiempo(23, 23).horas,
            minutos: this.horaFin.minutos - new Tiempo(23, 23).minutos
        }
        return TiempoAString(current)
    }
}

class Tiempo {
    constructor(horas, minutos) {
        this.horas = horas;
        this.minutos = minutos;
    }
}

let TiempoAString = (tiempo) => {
    console.log(tiempo);
    return (`${tiempo.horas} ${tiempo.horas === 1 ? "hora" : "horas"} ${tiempo.minutos} ${tiempo.minutos === 1 ? " minuto" : " minutos"}`);
}

horno = new Horno(new Tiempo(23, 00), new Tiempo(23, 30))







       
