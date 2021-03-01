const summation = (num, acc) => {

    console.log(acc)
    if (num <= 0) return acc
    else {
        acc += num
        summation(num-1, acc)
        return acc
    }

}

console.log(summation(8, 0))

let acc = 0
const summation2 = num => {

    // console.log(acc)
    if (num <= 0) return acc
    else {
        acc +=  num
        summation2(num-1, acc)
        return acc
    }
    
}

console.log(summation2(8))
