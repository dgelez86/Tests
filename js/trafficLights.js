let lights = [], colors = [], count = 0, iterator

// Crea tantas luces como el indica el campo input del HTML y los guarda en un array
const createNodes = (num) => {

    let light
    for (let i = 0 ; i < num ; i++) {

        light = document.createElement("div")
        light.setAttribute("class", "light")
        light.setAttribute("id", "light" + i)
        trafficLights.appendChild(light)
        lights.push(light)

    }

    createColors(lights.length)

}

// Crea un array de longitud igual a la longitud del array lights con los posibles colores
const createColors = () => {

    for (let i = 0 ; i < lights.length ; i++) {
        let color = []
        for (let j = 0 ; j < 3 ; j++) {
            color[j] = Math.round(Math.random() * 255)
        }
        colors.push(color)
    }

}

// Cambia el color de una luz. Se selecciona la luz secuencialmente acorde a los clicks
const changeColor = () => {

    // iterator = count % lights.length
    // lights.forEach((light, index) => {
    //     if (iterator !== index) {
    //         light.style.backgroundColor = ""
    //     } else {
    //         lights[iterator].style.backgroundColor = 
    //             `rgb(${colors[iterator][0]}, ${colors[iterator][1]}, ${colors[iterator][2]})`
    //         count++
    //     }
    // });

    iterator = count % lights.length
    lights[iterator].style.backgroundColor = 
                `rgb(${colors[iterator][0]}, ${colors[iterator][1]}, ${colors[iterator][2]})`
    if (iterator > 0)
        lights[iterator-1].style.backgroundColor = ""
    count++
    console.log(count, iterator)

}

// Devuelve a las luces no seleccionadas al color original
const resetOthers = () => {

    // iterator = count % lights.length
    // lights.forEach((light, index) => {
    //     if (iterator !== index) {
    //         light.style.backgroundColor = ""
    //     } else {
    //         lights[iterator].style.backgroundColor = 
    //             `rgb(${colors[iterator][0]}, ${colors[iterator][1]}, ${colors[iterator][2]})`
    //         count++
    //     }
    // });

}

const resetAll = () => {
    // lights.forEach((light) => {
    //     light.style.backgroundColor = ""
    // });
    lights[iterator].style.backgroundColor = ""
    count = 0
    colors = []
    createColors()
}

const start = () => {
    
    const trafficLights = document.getElementById('trafficLights')
    const numLights = document.getElementById('number').value
    const reset = document.getElementById('reset')
    // const input = document.getElementById('number').addEventListener('change', () => {
    //                     const numLights = document.getElementById('number').value
    //                 })
    const create = document.getElementById('create')
    const change = document.getElementById('change')
    create.addEventListener("click", () => createNodes(numLights))
    change.addEventListener("click", changeColor)
    reset.addEventListener("click", resetAll)

}


window.addEventListener("load", start)