let lights = [], sequencie = [], count = 0, iterator

// Crea tantas luces como el indica el campo input del HTML y los guarda en un array
const createFunction = (num) => {

    let light
    for (let i = 0 ; i < num ; i++) {

        light = document.createElement("div")
        light.setAttribute("class", "light")
        light.setAttribute("id", "ligth" + i)
        trafficLights.appendChild(light)
        lights.push(light)

    }

    createSequencie(lights.length)

}

// Crea un array de longitud igual a la longitud del array lights con los posibles colores
const createSequencie = num => {

    for (let i = 0 ; i < num ; i++) {
        let color = []
        for (let j = 0 ; j < 3 ; j++) {
            color[j] = Math.round(Math.random() * 255)
        }
        sequencie.push(color)
    }

}

// Cambia el color de una luz. Se selecciona la luz escuencialmente acorde a los clicks
const changeColor = () => {

    iterator = count % lights.length
    lights[iterator].style.backgroundColor = 
        `rgb(${sequencie[iterator][0]}, ${sequencie[iterator][1]}, ${sequencie[iterator][2]})`
    count++
    resetOthers()

}

// Devuelve a las luces no seleccionadas al color original
const resetOthers = () => {

    lights.forEach((light, index) => {
        if (iterator !== index) {
            light.style.backgroundColor = ""
        }
    });

}

const start = () => {
    
    const trafficLights = document.getElementById('trafficLights')
    const numLights = document.getElementById('number').value
    const create = document.getElementById('create')
    const change = document.getElementById('change')
    create.addEventListener("click", () => createFunction(numLights))
    change.addEventListener("click", changeColor)

}


window.addEventListener("load", start)