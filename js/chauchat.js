let charger = window.prompt("Specify how many bullets contains the charger: ")
let shotSound = "pium!!"
let blockSound = "Illo, me he quedao pillá!"
let traces = 5

let chauchat = {

    charger: [],

    fillCharger: function(charger) {

        for (let i = 0 ; i < charger ; i++)
            this.charger.push(shotSound)

    },

    shot: function () {

        for (let i = 0 ; i < this.charger.length ; i++) {
            if (this.randomGenerator(1, traces) * (100/traces) > 80) {
                console.log(shotSound)
                if ((i+1) % 3 === 0) console.log(" ")
            } else
            console.log(blockSound)           
        } 
    },

    randomGenerator: function(min, max) {

        return Math.round(Math.random() * (max - min) + min)

    }

    // determineProb: function() {

    //     return this.randomGenerator(1, traces) * (100/traces)

    // }

}

const main = () => {

    chauchat.fillCharger(charger)
    chauchat.shot()

}


window.addEventListener("load", main)