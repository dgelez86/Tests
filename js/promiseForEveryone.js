const key = "0150efc37ca79ec499dd0d973c5f0820"
let lat, lon

fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(response => response.json())
        .then(data => () => getWeather(data))

function getWeather(data) {

    return new Promise((resolveFunction, rejectFunction) => {
        resolveFunction(data)
    })

}

getWeather()
    .then(promise => showWeather(promise))

const showWeather = (error, data) => {
    console.log("el tiempo")
}

/* function getWeather(lat: number, lon: number, callback: (error: Error | null, weatherData: Object | null) => any) {
} */