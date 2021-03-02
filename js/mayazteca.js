class Warrior {

    constructor(life, power) {

        this.life = life
        this.power = power

    }

    getLife() {
        return this.life
    }

    attack() {
        return this.power
    }

    defend(damage) {
        this.life -= damage
        return this.showCurrentLife()
    }

    showCurrentLife() {
        return `${this.name} life is ${this.life}`
    }

}

class Maya extends Warrior {

    constructor(name, life, power) {

        super(life, power)
        this.name = name

    }

    drinkColaCao() {
        this.power += 10
    }

}

class Azteca extends Warrior {

    constructor(name, life, power) {

        super(life, power)
        this.name = name

    }

    drinkNesquik() {
        this.life += 10
    }

}

let turn = "azteca"
maya = new Maya("maya", 100, 7)
azteca = new Azteca("azteca", 65, 17)

while (azteca.getLife() > 0 || maya.getLife() > 0) {

    if (turn === "azteca") {

        switch (Math.round(Math.random() * 9)) {

            case 0: case 1: case 2: case 3: case 4:
                azteca.drinkNesquik()
                break
            default:
                console.log(azteca.defend(maya.attack()))

        }

        turn = "maya"

    } else {

        switch (Math.round(Math.random() * 9)) {

            case 0: case 1: case 2: case 3: case 4:
                maya.drinkColaCao()
                break
            default:
                console.log(maya.defend(azteca.attack()))

        }

        turn = "azteca" 

    }
    
}






