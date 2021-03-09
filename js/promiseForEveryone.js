const key = "0150efc37ca79ec499dd0d973c5f0820"
let lat = 33.441792, lon = -94.037689

const getWeather = (lat, lon) => {

    return new Promise((resolve, reject) => {

        if (!key || key != "0150efc37ca79ec499dd0d973c5f0820")
			reject(new Error("An API KEY must be provided on /JS/callback.js line 4 for function getQuestions to work"))
		else if (!lat || !lon)
			reject(new Error("You must provide latitue and longitude"))
		else {

			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`)
			    .then(response => response.json())
			    .then(data => resolve(data))
			    .catch(error => reject(error))

		}

    })

}

const showWeather = (data) => {

    console.log(data)

}

getWeather(lat, lon)
    .then(data => showWeather(data))
    .catch(error => console.log("no data", error))




/**
 * This function will always return a `Promise` which will resolve to a `JSON` of questions and reject an Error
 *
 * For using this function, you must provide an `API KEY` on line 4 of `/JS/callback.js` for using the function
 * @typedef {object} weatherDataJSON json defined on their documentation: https://openweathermap.org/api/one-call-api
 * @param {number} lat The Latitude you want info from
 * @param {number} lon The Longitude you want info from
 * @param {(error: (Error | null), weatherData: (weatherDataJSON | null)) => any} callback A callback function which will be called when the API provides data
 *
 */