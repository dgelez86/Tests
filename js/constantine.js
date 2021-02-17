const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }
    ]
}

/* 
    Imprime la pregunta en el HTML
        1. Llama a la función que imprime el enunciado de la pregunta
        2. Llama a la función que imprime las respuestas
*/
// function imprimePregunta(pregunta) {}

const imprimePregunta = pregunta => {

    // Creación del enunciado de la pregunta
    titulo = imprimeTitulo(pregunta)
    respuestas = imprimeRespuestas(pregunta)
    question.appendChild(titulo)   

    respuestas.forEach(el => {
        el.forEach(innerEl => {
            question.appendChild(innerEl)
        })
    })

    // console.log(titulo)
    // console.log(respuestas)
    
}

// Devuelve el enunciado de la pregunta
const imprimeTitulo = pregunta => {

    titulo = document.createElement("p")
    enunciado = document.createTextNode(pregunta.titulo)
    titulo.appendChild(enunciado)
    return titulo

}

// Devuelve todas las posibles respuestas
const imprimeRespuestas = pregunta => {
    let respuestas = []
    for (let i = 0 ; i < pregunta.respuestas.length ; i++)
        respuestas.push(imprimeRespuesta(pregunta.respuestas[i]))
    return respuestas

}

// Devuelve una respuesta, una opción. LLama a las funciones que imprimen el label y el input
const imprimeRespuesta = respuesta => {
    let answer = []
    answer.push(imprimeInput(respuesta))
    answer.push(imprimeLabel(respuesta))
    return answer

}

// Devuelve el label de la opción
const imprimeLabel = respuesta => {

    label = document.createElement("label")
    label.setAttribute("for", respuesta.id)
    labelText = document.createTextNode(respuesta.label)
    label.appendChild(labelText)
    return label

}

// Devuelve el input radio de la opción
const imprimeInput = respuesta => {

    input = document.createElement("input")
    input.setAttribute("type", "radio")
    input.setAttribute("id", respuesta.id)
    input.setAttribute("name", respuesta.name)
    input.setAttribute("value", respuesta.value)
    return input

}

const start = () => {
    const question = document.getElementById('question')
    imprimePregunta(pregunta)
    console.log(question)
}


window.addEventListener("load", start)


/* <form>
        <p>¿A quién ha doblado más veces Constantino Romero?</p>
        <label>Clint Eastwood</label>
        <input name="actor" type="radio" value="clint-eastwood">
        <label>James Earl</label>
        <input name="actor" type="radio" value="james-earl">
        <label>Roger Moore</label>
        <input name="actor" type="radio" value="roger-moore">
        <label>William Shatner</label>
        <input name="actor" type="radio" value="william-shatner">
        <label>Arnold Schwarzenegger</label>
        <input name="actor" type="radio" value="arnold-schwarzenegger">
</form> */