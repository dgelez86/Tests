let lights = [], numclicks, sequencie = [], count = 0, numClicks

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

const createSequencie = num => {

    for (let i = 0 ; i < num ; i++) {
        let color = []
        for (let j = 0 ; j < 3 ; j++) {
            color[j] = Math.round(Math.random() * 255)
        }
        sequencie.push(color)
    }

}

const changeColor = () => {

    numClicks = count % lights.length
    lights[numClicks].style.backgroundColor = 
        `rgb(${sequencie[numClicks][0]}, ${sequencie[numClicks][1]}, ${sequencie[numClicks][2]})`
    count++
    resetOthers()

}

const resetOthers = () => {

    lights.forEach((light, index) => {
        if (numClicks !== index) {
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