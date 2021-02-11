// Multiply 2 numbers
const multiply = (num1, num2) => {

    let i = 0, result = 0, num1Negative, num2Negative
     
    if (num1 < 0) {
        num1Negative = true
        num1 *= -1
    }

    if (num2 < 0) {
        num2Negative = true
        num2 *= -1
    }

    while (i != num2) {
        result += num1
        i++
    }

    if (num1Negative == true && num2Negative == true) return result
    if (num1Negative == true || num2Negative == true) return result * (-1)

    return result

}

// FizzBuzz
const doFizzBuzz = times => {

    for (let i = 1 ; i <= times ; i++) {

        if (i % 3 === 0 && i % 5 === 0)  console.log("FizzBuzz")
        else if (i % 3 === 0 )  console.log("Fizz")
        else if (i % 5 === 0)  console.log("Buzz")
        else  console.log(i)

    }

}

// Count char
const countChar2 = (phrase = undefined) => {

    if (!phrase) console.warn("There is no string")
	else console.log(`Phrase ${phrase} has ${phrase.length} characters`)

}

// Cut Phrase
const cutText2 = (phrase = undefined, separator = undefined) => {

    if (!phrase) console.warn("There is no string")
	else if (!separator || Math.sign(separator) === -1) 
		console.info(`Length that mark cut is void or a negative number, ${separator}, whole phrase is shown: ${phrase}`)
	else console.log(phrase.substring(0, separator))

}

// Return text array
const stringToArray = (phrase = undefined, separator = undefined) => {

	if (!phrase) console.warn("There is no string")
	else if (!separator || !phrase.includes(separator)) 
		console.info(`Separator is void or "${phrase}" does not contain ${separator}`)
	else console.log(phrase.split(separator))

}

// Repeat text
const repeatText = (phrase = undefined, howMany = undefined) => {

	if (!phrase) console.warn("There is no string")
	else if (!howMany || Math.sign(howMany) === -1) console.info("Times to repeat is void or a negative number")
	else console.log(phrase.concat(" / ").repeat(howMany))

}

// Reverse text
const reverseText = (phrase = "") => {

	if (!phrase) console.warn("There is no string")
	else console.log(phrase.split("").reverse().join(""))

}

// Count repeated words
 const countRepeated = (phrase = undefined, word = undefined) => {

	if (!phrase) return console.warn("There is no string")
	if (!word) return console.warn("What word do you want to view if is repeated?")

	phrase = phrase.toLowerCase()
	let arrayPhrase = phrase.split(" "), count = 0
	arrayPhrase.forEach(el => {
		if (el === word) count++	
	});
	console.log(`Word "${word}" is ${count} times in the phrase "${phrase}"`)

}

// Palyndrome
const showPalyndrome = (phrase = "") => {

	if (!phrase) return console.warn("There is no string")
	
	let invertedPhrase = phrase.replaceAll(" ", "").split("").reverse().join("")
	if (invertedPhrase === phrase.replaceAll(" ", "")) console.log(`Phrase "${phrase} is a palyndrome`)
	else console.log(`Phrase "${phrase}" is not a palyndrome`)

}

// Delete pattern
const deletePattern2 = (phrase = "", pattern = "") => {

	if (!phrase) return console.warn("There is no string")
	if (!pattern) return console.warn("There is no pattern to delete")

	let newPhrase = phrase.replaceAll(new RegExp(pattern, "ig"), "")
	console.log(`Deleting "${pattern}" from "${phrase}", result: "${newPhrase}"`)

}

// Random number
const randomNumber = (min, max) => {

	console.log(Math.round(Math.random() * (max - min) + min))

}

// Capicua number */
const checkCapicua = (userNumber = 0) => {

	if (!userNumber) return console.warn('Need to introduce a number')
	if (typeof userNumber !== 'number') return console.warn('Need to be a number')

	userNumber = userNumber.toString()
	let isCapicua = userNumber.toString().split('').reverse().join('')
	if (isCapicua === userNumber) console.log(`Number ${userNumber} is capicua`) 
	else console.log(`Number ${userNumber} is not capicua`)

}

// Factorial
const showFactorial = (userNumber = undefined) => {

	if (!userNumber) return console.info('Need to introduce a number')
	if (typeof userNumber !== 'number') return console.warn('Need to be a number')
	if (userNumber === 0 || Math.sign(userNumber) === -1) return console.error('Number must be above 0') 

	let factorial = 1
	for (let i = userNumber ; i >= 1 ; i--) {
		factorial *= i
	}
	console.log(`Factorial of ${userNumber} is ${factorial}`)

}

// Prime number
const isPrime = (userNumber = undefined) => {

	if (userNumber === undefined) return console.info('Need to introduce a number')
	if (typeof userNumber !== 'number') return console.warn('Need to be a number')
	if (userNumber === 0) return console.info('Number 0 is not prime or not-prime')
	if (userNumber === 1) return console.info('Number 1 is prime') 
	if (Math.sign(userNumber) === -1) return console.error('Number can not be negative')

	for (let i = 2 ; i < userNumber ; i++) {
		if (userNumber % i === 0) return console.log(`Number ${userNumber} is not prime`)
	}

	console.log(`Number ${userNumber} is prime`)

}

// Par-Impar
const isPar = (userNumber = undefined) => {

	if (userNumber === 0) return console.info('Number 0 is 0, not par, nor impar')
	if (!userNumber) return console.info('Need to introduce a number')
	if (typeof userNumber !== 'number') return console.warn('Need to be a number')

	if (userNumber % 2 === 0) console.log(`Number ${userNumber} is par`)
	else console.log(`Number ${userNumber} is impar`)

}

// Celsius/Fahrenheit conversion
const celsiusFahrConversion = (temperature = undefined, unit = undefined) => {

	if (temperature === undefined) return console.info('Need to introduce a temperature')
	if (typeof temperature !== 'number') return console.warn('Temperature must be a number')
	if (typeof unit !== 'string' || unit.length > 1 || !/(c|f)/.test(unit.toLowerCase())) 
		return console.warn('Temperature must be in Celsius (c) or Fahrenheit (f)')

	let celsius

	unit === 'c'
		? celsius = true
		: celsius = false

	if (celsius) 
		console.log(`${temperature} celsius degrees are ${temperature * (9/5) + 32} fahrenheit degrees`)
	else	
		console.log(`${temperature} fahrenheit degrees are ${(temperature - 32) * (5/9)} celsius degrees`)

}

// Binary/Decimal conversion
const binaryDecimalConversion = (userNumber = undefined, base = undefined) => {

	if (userNumber === undefined) return console.log('Need to introduce a number to convert')
	if (userNumber === 0) return console.log(' Number 0 is 0 in every notation')
	if (!base) return console.log('Need to introduce a base')
	if (typeof base !== 'number' || !/(2|10)/.test(base)) 
		return console.log('Base must be 2 (binary) or 10 (decimal)')
	if (base === 2 && !/(0|1)/.test(userNumber)) 
		return console.log('Numbers in binary only can contains 0s and 1s')

	let numberToString = userNumber.toString()
	if (base === 2) console.log(Number.parseInt())
	else console.log()

}

// New element on array
const introduceElement = (array, elem, pos) => {

	for (let i = array.length-1 ; i >= 0 ; i--) {
		array[i+1] = array[i]
		if (i === pos-1) {
			array[i] = elem
			return
		}
	}

}

// Words of a string to array
const stringToArray = phrase => {

	let pos = 0, array = []
	for (let i = 0 ; i < phrase.length ; i++) {
		if (array[pos] === undefined) array[pos] = ""
		if (phrase[i] === " ") pos++
    	array[pos] += phrase[i]
    }
	return array

}

// Discount
//		(1000, 20) will return 800 */


// Function time transcurred to today
//		(new date(1984,4,23)) will return 36 years