let player1 = {

    card: "x",
    playsDone: [],

    getCard: function() {
        return this.card
    }

}

let player2 = {

    card: "o",
    playsDone: [],

    getCard: function() {
        return this.card
    }

}

let board = { 

    ocuppedCells: [false, false, false, false, false, false, false, false, false],

    // Comprobar si la casilla está libre (false)
    checkOcuppedCell: function(cell) {
        if (this.ocuppedCells[cell] === false) return false
        else return true
    }

}

let game = {

    count: 0,
    turn: 1,
    victory: 0,
    playerPlaysDone: [],
    winningCombs: [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9],],

    getPlayerCard: function() {
        if (this.turn === 1) return player1.getCard()
        if (this.turn === 2) return player2.getCard()
    },

    getVictory: function() {
        return this.victory
    },

    makeMove: function(cell) {
        // Comprobar si la casilla está libre (false)
        if (board.checkOcuppedCell(cell-1) === false) {
            // Añadir la casilla al array de movimientos
            this.playerPlaysDone.push(cell)
            // Marcar la casilla como ocupada
            board.ocuppedCells[cell-1] = true
        }
        // Cambia el turno
        this.changeTurn()
        // Copia el array de jugadas del objeto main al array de jugadas del jugador
        this.copyPlaysDone(this.checkTurn)
        this.fillCell(cell)
        this.displayInfo()
    },

    fillCell: function(cell) {

    switch (cell) {

        case 1: cell1.innerHTML = this.getPlayerCard(); break
        case 2: cell2.innerHTML = this.getPlayerCard(); break
        case 3: cell3.innerHTML = this.getPlayerCard(); break
        case 4: cell4.innerHTML = this.getPlayerCard(); break
        case 5: cell5.innerHTML = this.getPlayerCard(); break
        case 6: cell6.innerHTML = this.getPlayerCard(); break
        case 7: cell7.innerHTML = this.getPlayerCard(); break
        case 8: cell8.innerHTML = this.getPlayerCard(); break
        case 9: cell9.innerHTML = this.getPlayerCard(); break

    }

},

    copyPlaysDone: function(player) {

        // Copiar el array de jugadas del jugador al array de jugadas de game
        if (player === 1)
            player1.playsDone.push(this.playerPlaysDone[this.playerPlaysDone.length-1])
        if (player === 2)
            player1.playsDone.push(this.playerPlaysDone[this.playerPlaysDone.length-1])
        // Limpiar el array de jugadas del objeto game
        this.playerPlaysDone = []

    },

    changeTurn: function() {
        if (this.turn === 1) this.turn = 2
        else this.turn = 1
    },

    checkTurn: function() {

        if (this.turn === 1) return 1
        if (this.turn === 2) return 2        

    },

    checkVictory: function() {

        // Recorrer el array de arrays de combinaciones ganadoras
        for (let i = 0; i < this.winningCombs.length; i++) {
            // Recorrer array de UNA combinación ganadora
            for (let j = 0; j < this.winningCombs[i].length; j++) {
                // Recorrer array de movimientos del jugador
                for (let cell = 0 ; cell < this.playsDone.length ; cell++) {
                    if (this.winningCombs[i][j] === this.playsDone[cell])
                        this.count++
                }
            }
            if (this.count != 3) this.count = 0
        } 
        if (this.count === 3) return true
        console.log(this.count)
        return false
    },

    displayInfo: function() {

        let stringToShow, stringTurn, stringFreeCells, stringWon, spaces = " "

        if (this.checkTurn() === 1)
            stringTurn = "Player 1 turn. "
        if (this.checkTurn() === 2)
            stringTurn = "Player 2 turn. "

        stringFreeCells = `Free cells: ${board.ocuppedCells.map((el,index) => {
            if (el == false) el = index + 1
            return el
            }).filter(cell => cell != true)}.`

        if (this.getVictory() === 0) stringWon = "Nobody won"
        if (this.getVictory() === 1) stringWon = "Player1 won"
        if (this.getVictory() === 2) stringWon = "Player2 won"

        stringToShow = stringTurn.concat(spaces).concat(stringFreeCells).concat(spaces).concat(stringWon)
        display.innerHTML = stringToShow

    }

}

const start = () => {

    const cell1 = document.getElementById('cell1')
    const cell2 = document.getElementById('cell2')
    const cell3 = document.getElementById('cell3')
    const cell4 = document.getElementById('cell4')
    const cell5 = document.getElementById('cell5')
    const cell6 = document.getElementById('cell6')
    const cell7 = document.getElementById('cell7')
    const cell8 = document.getElementById('cell8')
    const cell9 = document.getElementById('cell9')
    const display = document.getElementById('display')
    events()

}

const events = () => {

    cell1.addEventListener("click", () => game.makeMove(1))
    cell2.addEventListener("click", () => game.makeMove(2))
    cell3.addEventListener("click", () => game.makeMove(3))
    cell4.addEventListener("click", () => game.makeMove(4))
    cell5.addEventListener("click", () => game.makeMove(5))
    cell6.addEventListener("click", () => game.makeMove(6))
    cell7.addEventListener("click", () => game.makeMove(7))
    cell8.addEventListener("click", () => game.makeMove(8))
    cell9.addEventListener("click", () => game.makeMove(9))

}


window.addEventListener("load", start)


// const numMovements = 1
// let countMovements = 0
// while ((countMovements != numMovements) && !(player1.victory == true || player2.victory == true)) {}

/*
    1. Introducir el punto de ruptura
    2. Filter filtra la primera casilla
*/
