const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {

    constructor(civilImages, militaryImages) {

        this.civil = civilImages
        this.military = militaryImages

    }
    
    getRandomCivil() {
        return this.civil[Math.round(Math.random() * 4)]
    }
    
    getRandomMilitary() {
        return this.military[Math.round(Math.random() * 4)]
    }
    
    getAll() {

        let array = []
        for (let i = 0 ; i < this.civil.length ; i++) {
            array.push(this.getRandomCivil())
            array.push(this.getRandomMilitary())
        }
        return array
        // return this.civil.concat(this.military).sort(() => Math.random() - 0.5)
    }

}

class Painter {

    constructor() {
    }

    createGallery(arrayOfImages) {

        console.log(arrayOfImages)
        let body = document.querySelector("body")
        arrayOfImages.map(el => {
            let img = document.createElement("img")
            img.setAttribute("src", el)
            img.setAttribute("class", "image")
            body.appendChild(img)
        })

    }

    createImageTag(imageUrl) {

        let body = document.querySelector("body")
        let img = document.createElement("img")
        img.setAttribute("src", imageUrl)
        img.setAttribute("class", "image")
        body.appendChild(img)

    }

    paintSingleImage(imageUrl) {
        this.deletePrevious()
        this.createImageTag(imageUrl)
    }

    paintMultipleImages(arrayOfImages) {

        this.deletePrevious()
        this.createGallery(arrayOfImages)
        
    }

    deletePrevious() {
        let images = document.querySelectorAll(".image")
        images.forEach(el => el.remove())
    }

}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

// console.log(aircrafts)
// console.log(aircrafts.getRandomCivil())
// console.log(aircrafts.getAll())