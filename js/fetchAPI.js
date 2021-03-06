let input, searchButton, searchResults, resetButton, acceptedWords
let arrayAcceptedWords = ["people", "planets", "species"]

const start = () => {

    acceptedWords = document.querySelector(".acceptedWords")
    input = document.querySelector("#searchInput")
    searchButton = document.querySelector("#searchButton")
    searchResults = document.querySelector(".results")
    resetButton = document.querySelector("#resetButton")
    arrayAcceptedWords.map(el => {
        let div = document.createElement("div")
        let text = document.createTextNode(el)
        div.appendChild(text)
        acceptedWords.appendChild(div)
        div.addEventListener("dragstart", (e) => {
            e.preventDefault
            console.log("start event")
        })
        div.addEventListener("dragend", (e) => {
            e.preventDefault
            input.value = div.textContent
        })
    })
    input.addEventListener("keypress", (e) => {if (e.key === "Enter") getData(input.value.toLowerCase())})
    input.addEventListener("dragenter", (e) => {
            e.preventDefault
            input.style.borderColor = "red"
    })
    input.addEventListener("dragleave", (e) => {
            e.preventDefault
            input.style.borderColor = ""
    })
    searchButton.addEventListener("click", () => getData(input.value.toLowerCase()))
    resetButton.addEventListener("click", reset)
    getSavedSearch()

}

const getData = input => {

    fetch(`https://swapi.dev/api/${input}/`)
        .then(response => response.json())
        .then(data => displaySearch(data))

}

const displaySearch = (data) => {

    saveSearch(data)
    deletePreviousNodes()
    let count = 1
    let results = data.results

    if (results) {
        results.map(el => {
            let div = document.createElement("div")
            div.setAttribute("class", "searchElement")
            div.setAttribute("id", `${count}`)
            let text = document.createTextNode(`${el.name} ******** ${input.value}`)
            div.appendChild(text)
            searchResults.appendChild(div)
            div.addEventListener("click", () => getSelection(div))
            count++
        })
    }

}

const getSelection = (selection) => {

    let selectionID = selection.getAttribute("id")
    let selectionType = selection.textContent
    selectionType = selectionType.substring(selectionType.lastIndexOf(" ")).trimStart()
    fetch(`https://swapi.dev/api/${selectionType}/${selectionID}/`)
        .then(response => response.json())
        .then(data => displaySelection(data))

}

const displaySelection = (data) => {

    deletePreviousNodes()
    let div = document.createElement("div")
    div.setAttribute("class", "selectionElement")
    let text = document.createTextNode(`${data.name} ***** Films: ${data.films.map(el => ` ${el}`)}`)
    div.appendChild(text)
    searchResults.appendChild(div)
    let button = document.createElement("input")
    button.setAttribute("id", "backButton")
    button.setAttribute("type", "button")
    button.setAttribute("value", "back")
    button.addEventListener("click", getSavedSearch)
    searchResults.appendChild(button)

}

const deletePreviousNodes = () => {

    let nodes = document.querySelectorAll(".searchElement, .selectionElement, #backButton")
    nodes.forEach(el => el.remove())

}

const saveSearch = (data) => {

    const storedSearch = JSON.stringify(data)
    localStorage.setItem("storedSearch", storedSearch)

}

const getSavedSearch = () => {

    const storedSearch = JSON.parse(localStorage.getItem("storedSearch")) || []
    displaySearch(storedSearch)

}

const reset = () => {

    const storedSearch = JSON.stringify("")
    localStorage.setItem("storedSearch", storedSearch)
    input.value = ""
    deletePreviousNodes()

}


window.addEventListener("load", start)