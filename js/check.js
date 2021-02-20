// Creo los objeto pregunta y respuesta
let questions = [
{
    title: "¿Cuál es el animal más grande del mundo?" ,
    correctAnswer: 1,  
    answers: [
        {
            label: "Orca",
            id: "orca",
            name: "animal",
            value: "orca",
        },

        {
            label: "Ballena azul",
            id: "ballena-azul",
            name: "animal",
            value: "ballena-azul",
        },

        {
            label: "Pitón reticulada",
            id: "piton-reticulada",
            name: "animal",
            value: "piton-reticulada",
        },

        {
            label: "Titanovoa",
            id: "tita-novoa",
            name: "animal",
            value: "tita-novoa",
        },
        

    ]
},

{
    title: "¿Cuanto dura el embarazo de un elefante?" ,
    correctAnswer: 2,  
    answers: [
        {
            label: "6 meses",
            id: "seis-meses",
            name: "elefante",
            value: "seis-meses",
        },

        {
            label: "12 meses",
            id: "doce-meses",
            name: "elefante",
            value: "doce-meses",
        },

        {
            label: "22 meses",
            id: "veintidos-meses",
            name: "elefante",
            value: "veintidos-meses",
        },

        {
            label: "18 meses",
            id: "dieciocho-meses",
            name: "elefante",
            value: "dieciocho-meses",
        },

    ]
},

{
    title: "¿Cuantos huesos tiene el ser humano?" ,
    correctAnswer: 2,  
    answers: [
        {
            label: "200 huesos",
            id: "doscientos-huesos",
            name: "huesos",
            value: "doscientos-huesos",
        },

        {
            label: "114 huesos",
            id: "cientocatorce-meses",
            name: "huesos",
            value: "cientocatorce-meses",
        },

        {
            label: "110 meses",
            id: "cientodiez-meses",
            name: "huesos",
            value: "cientodiez-meses",
        },

        {
            label: "206 huesos",
            id: "doscientosseis-huesos",
            name: "huesos",
            value: "doscientosseis-huesos",
        },

    ]
},

{
    title: "¿Cuantos corazones tiene un pulpo?" ,
    correctAnswer: 0,  
    answers: [
        {
            label: "3 corazones",
            id: "tres-corazones",
            name: "corazones",
            value: "tres-corazones",
        },

        {
            label: "8 corazones",
            id: "ocho-corazones",
            name: "corazones",
            value: "ocho-corazones",
        },

        {
            label: "1 corazón",
            id: "un-corazon",
            name: "corazones",
            value: "un-corazon",
        },

        {
            label: "2 corazones",
            id: "dos-corazones",
            name: "corazones",
            value: "dos-corazones",
        },

    ]
},

{
    title: "¿Cuál de estos animales es ovíparo?" ,
    correctAnswer: 1,  
    answers: [
        {
            label: "Delfín",
            id: "delfin",
            name: "oviparo",
            value: "delfin",
        },

        {
            label: "Cóndor",
            id: "condor",
            name: "oviparo",
            value: "condor",
        },

        {
            label: "Hámster",
            id: "hamster",
            name: "oviparo",
            value: "hamster",
        },

        {
            label: "Armadillo",
            id: "amardillo",
            name: "oviparo",
            value: "amardillo",
        },

    ]
}

];

/*
        FLUJO
    1. PrintTitle; se le pasa como argumento el objeto de preguntas
    2. PrintAllAnswers
*/

//Funcion para crear elementos html
function createElement(el) {
    let element = document.createElement(el);
    return element;
};

// Crea la pregunta, consistente en un nodo p y textNode, y es hijo de un div
// Input: question[i].title
function printTitle(title) {

    let questionDiv, questionTitle, questionText
    // Creamos el nodo div y lo hacemos hijo de form
    questionDiv = createElement('div');
    questionDiv.setAttribute("class", "pregunta");
    form.appendChild(questionDiv)

    // Creamos el nodo p y lo hacemos hijo de div
    questionTitle = createElement('p');
    questionDiv.appendChild(questionTitle);

    // Creamos el textNode y le hacemos hijo del título de la pregunta
    questionText = document.createTextNode(title);
    questionTitle.appendChild(questionText);

};

// Crea las respuestas, consistentes en inputs radio, con su label y son hijos de un div
function printAllAnswers(answers) {

    // Creamos tantos divs como respuestas haya, añadimos el atributo clase y los hacemos hijo de form
    // Creamos los arrays de labels, inputs y answers e invocamos a las funciones que crean los nodos label e input
    let arrLabels = [], arrInputs = [], arrAnswers = [], divAnswers;
    for (let i = 0 ; i < answers.length ; i++) {
        divAnswers = document.createElement("div");
        divAnswers.setAttribute("class", "respuestas");
        form.appendChild(divAnswers);
        arrAnswers.push(answers[i])
        arrLabels[arrLabels.length] = printLabel(answers[i]);
        arrInputs[arrInputs.length] = printInput(answers[i]);
        divAnswers.appendChild(arrInputs[i]);
        divAnswers.appendChild(arrLabels[i]);
    };

};

// Crea nodo label y su textNode y appenChild del textNode al label
// Input: subarray de answers
// Return label
function printLabel(answer) {

    // Creamos el nodo label
    let label = createElement('label');

    // Añadimos el atributo for
    label.setAttribute('for', answer.id);

    // Creamos el textNode
    let labelText = document.createTextNode(answer.label);

    // Convertimos a textNode en hijo de label
    label.appendChild(labelText);

    // Devolvemos el nodo
    return label;

};

// Crea nodo input y su textNode
// Input: subarray de answers
// Return input
function printInput (answer) {
    
    // Creamos el nodo input
    let input = createElement('input');

    // Añadimos los atributos
    input.setAttribute('name', answer.name);
    input.setAttribute('type', 'radio');
    input.setAttribute('id', answer.id);
    input.setAttribute('id', answer.value);

    // Devolvemos el nodo
    return input;

};

const body = document.querySelector("body");
let form = createElement("form");
body.appendChild(form);

for (let i = 0 ; i <questions.length ; i++) {
    printTitle(questions[i].title);
    printAllAnswers(questions[i].answers);
}

