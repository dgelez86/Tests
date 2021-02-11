// const sumarArray = arrayNumeros => arrayNumeros.reduce((result, el) => result + el)

// let arrayNumeros = []
// for (let i = 0; i <= 3; i++) 
//     arrayNumeros.push(i)

// console.log(sumarArray(arrayNumeros))

const stringToArray = phrase => {

	let pos = 0, array = []
	for (let i = 0 ; i < phrase.length ; i++) {
		if (array[pos] === undefined) array[pos] = ""
    	array[pos] += phrase[i]
		if (phrase[i] === " ") {
			let deleteSpace = array[pos]
			array[pos] = ""
			for (let i = 0 ; i < deleteSpace.length-1 ; i++) {
				array[pos] += deleteSpace[i]
			}
			pos++
		}
    }
	return array

}

const stringToArray2 = phrase => {

	let pos = 0, array = []
	for (let i = 0 ; i < phrase.length ; i++) {
		if (array[pos] === undefined) array[pos] = ""
		if (phrase[i] === " ") {
			pos++
			continue
		}
    	array[pos] += phrase[i]
		if (phrase[i] === " ") pos++
    }
	return array

}

console.log(stringToArray("hola mundo"))
console.log(stringToArray("hola mundo hola"))
console.log(stringToArray("hola mundo hola mundo"))
console.log(stringToArray2("hola mundo"))
console.log(stringToArray2("hola mundo hola"))
console.log(stringToArray2("hola mundo hola mundo"))
