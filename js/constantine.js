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
const imprimePregunta = (pregunta) => {

    titulo = imprimeTitulo(pregunta)
    respuestas = imprimeRespuestas(pregunta)

    question.innerHTML = titulo.concat(respuestas)

}

// Devuelve el enunciado de la pregunta
const imprimeTitulo = pregunta => `<p>${pregunta.titulo}</p>`

// Devuelve todas las posibles respuestas
const imprimeRespuestas = pregunta => {

    let respuestas = ""
    for (let i = 0 ; i < pregunta.respuestas.length ; i++) {
        respuestas += imprimeRespuesta(pregunta.respuestas[i])
    }
    return respuestas

}

// Devuelve una respuesta, una opción. LLama a las funciones que imprimen el label y el input
const imprimeRespuesta = respuesta => {
  
    label = imprimeLabel(respuesta)
    input = imprimeInput(respuesta)
    // console.log(label.concat(input))
    return label.concat(input)

}

// Devuelve el label de la opción
const imprimeLabel = respuesta => `<label for="${respuesta.id}">${respuesta.label}</label>`

// Devuelve el input radio de la opción
const imprimeInput = respuesta => `<input type="radio" id="${respuesta.id}" name="${respuesta.name}" value="${respuesta.value}">`

const start = () => {
    const question = document.getElementById('question')
    imprimePregunta(pregunta)
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