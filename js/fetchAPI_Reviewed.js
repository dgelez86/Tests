let input, searchButton, searchResults, resetButton, acceptedWords
let arrayAcceptedWords = ["people", "planets", "species"], favorites = []

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
        .then(data => displayMaster(data))

}

const displayMaster = (data) => {

    saveSearch(data)
    deletePreviousNodes()
    let count = 1
    let results = data.results

    if (results) {
        results.map(el => {
            let divWrapper = document.createElement("div")
                divWrapper.setAttribute("class", "masterSearch")
            let divElement = document.createElement("div")
                divElement.setAttribute("class", "divElement")
                divElement.setAttribute("id", `${count}`)
            let textElement = document.createTextNode(`${el.name} *** ${input.value}`)
            let favButton = document.createElement("input")
                favButton.setAttribute("type", "button")
                favButton.setAttribute("id", "favButton")
            divElement.appendChild(textElement)
            divWrapper.appendChild(divElement)
            divWrapper.appendChild(favButton)
            searchResults.appendChild(divWrapper)
            divElement.addEventListener("click", () => getSelection(divElement))
            favButton.addEventListener("click", () => saveFavorite(el, favButton))
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
        .then(data => displayDetails(data))

}

const displayDetails = (data) => {

    deletePreviousNodes()
    let div = document.createElement("div")
        div.setAttribute("class", "detailsSearch")
    let text = document.createTextNode(`${data.name} ***** Films: ${data.films.map(el => `  ${el}`)}`)
        div.appendChild(text)
    let button = document.createElement("input")
        button.setAttribute("id", "backButton")
        button.setAttribute("type", "button")
        button.setAttribute("value", "back")
        button.addEventListener("click", getSavedSearch)
    let favButton = document.createElement("input")
        favButton.setAttribute("type", "button")
        favButton.setAttribute("id", "favButtonDetails")
    searchResults.appendChild(div)
    searchResults.appendChild(button)
    searchResults.appendChild(favButton)

}

const deletePreviousNodes = () => {

    let nodes = document.querySelectorAll(".masterSearch, .detailsSearch, #favButton, #favButtonDetails, #backButton")
    nodes.forEach(el => el.remove())

}

const saveSearch = (data) => {

    const storedSearch = JSON.stringify(data)
    localStorage.setItem("storedSearch", storedSearch)

}

const getSavedSearch = () => {

    const storedSearch = JSON.parse(localStorage.getItem("storedSearch")) || []
    displayMaster(storedSearch)

}

const saveFavorite = (element, button) => {

    if (button.style.backgroundColor === "red") {
        button.style.backgroundColor = ""
        favorites.splice(favorites.indexOf(element.name), 1)
        firebase.database().ref(`${element.name}`).removeValue()
    } else {
        button.style.backgroundColor = "red"
        favorites.push(element.name)
        firebase.database().ref(`${element.name}`).update(element)
    }

}

const reset = () => {

    localStorage.clear()
    input.value = ""
    deletePreviousNodes()

}


window.addEventListener("load", start)