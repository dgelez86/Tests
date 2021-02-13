// let numArray = [2,4,3,7,9,1]
// // for (let i = 23; i >= 0; i--) 
// //     numArray.push(i)

// let numArray2 = [2,4,3]


// const sortArray = numArray => {

//     for (let i = 0 ; i <= numArray.length-1 ; i++) {
//         if (numArray[i] > numArray[i+1]) {
//             let change = numArray[i+1]
//             numArray[i+1] = numArray[i]
//             numArray[i] = change
//         }
        
//     }

//     return numArray


const cell1 = document.getElementById('cell1').getAttribute("data-value")

switch (cell1) {
    case "1": console.log("válido"); break
    default: console.log("válido también")
}

