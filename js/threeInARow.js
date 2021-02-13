let player1 = {

    card: "x",
    playsDone: [],

    getCard: function() {
        return this.card
    },

    getPlaysDone: function() {
        return this.playsDone
    }

}

let player2 = {

    card: "o",
    playsDone: [],

    getCard: function() {
        return this.card
    },

    getPlaysDone: function() {
        return this.playsDone
    }

}

let board = { 

    ocuppiedCells: [false, false, false, false, false, false, false, false, false],

    // Comprobar si la casilla está libre (false)
    checkOcuppiedCell: function(cell) {
        if (this.ocuppiedCells[cell] === false) return false
        else return true
    }

}

let game = {

    count: 0,
    turn: 1,
    victory: 0,
    playerPlay: 0,
    winningCombs: [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9],],

    getPlayerCard: function() {
        if (this.turn === 1) return player1.getCard()
        if (this.turn === 2) return player2.getCard()
    },

    getVictory: function() {
        return this.victory
    },

    makeMove: function(cell) {
        
        const numMoves = 1
        let countMoves = 0
        while ((countMoves != numMoves) && !(game.getVictory() != 0)) {

            // Comprobar si la casilla está libre (false)
            if (board.checkOcuppiedCell(cell-1) === false) {
            // Añadir la casilla al array de movimientos
            this.playerPlay = cell
            // Marcar la casilla como ocupada
            board.ocuppiedCells[cell-1] = true
            }
            // Cambia el turno
            this.changeTurn()
            // Copia el array de jugadas del objeto main al array de jugadas del jugador
            this.copyPlay(this.checkTurn())
            this.fillCell(cell)
            this.checkVictory()
            this.displayInfo(false)
            countMoves++

        }
        this.displayInfo(true)
        
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

    copyPlay: function(player) {

        // Añade la jugada del objeto game al array de jugadas del jugador
        if (player === 1)
            player1.playsDone.push(this.playerPlay)
        if (player === 2)
            player2.playsDone.push(this.playerPlay)
        // Reinicia jugada del objeto game
        this.playerPlay = 0

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

        let count = 0
        // Recorrer el array de arrays de combinaciones ganadoras
        for (let i = 0; i < this.winningCombs.length; i++) {
            // Recorrer array de UNA combinación ganadora
            for (let j = 0; j < this.winningCombs[i].length; j++) {
                // Recorrer array de movimientos del jugador
                if (this.checkTurn() === 1) {
                    for (let z = 0 ; z < player1.playsDone.length ; z++)
                        if (this.winningCombs[i][j] === player1.playsDone[z]) count++
                } else {
                    for (let z = 0 ; z < player2.playsDone.length ; z++)
                        if (this.winningCombs[i][j] === player2.playsDone[z]) count++
                }

            }
            // Reiniciar contador si no están, a la vez, las 3 casillas de una combinación ganadora
            if (count != 3) count = 0
        } 
        // Si están las 3 casillas a la vez de una combinación ganadora, el jugador del turno gana
        if (count === 3) {
            () => { 
                if (this.checkTurn() === 1) this.victory = 1
                else this.victory = 2
            }
        }
            
    },

    displayInfo: function(fin) {

        let stringToShow, stringTurn, stringFreeCells, stringWon, spaces = " "
        if (!fin) {

            if (this.checkTurn() === 1) stringTurn = "Player 1 turn. "
            if (this.checkTurn() === 2) stringTurn = "Player 2 turn. "
            stringFreeCells = `Free cells: ${board.ocuppiedCells.map((el,index) => {
                if (el == false) el = index + 1
                return el
            }).filter(cell => cell != true)}.`
            if (this.getVictory() === 0) stringWon = "Nobody won"
            if (this.getVictory() === 1) stringWon = "Player1 won"
            if (this.getVictory() === 2) stringWon = "Player2 won"

            stringToShow = stringTurn.concat(spaces).concat(stringFreeCells).concat(spaces).concat(stringWon)

        } else {
            stringToShow = "Limit reached"
        }

        display.innerHTML = stringToShow
        

        console.log(`p1 plays ${player1.playsDone}`)
        console.log(`p2 plays ${player1.playsDone}`)
        console.log(`victory ${this.victory}`)
        console.log(`turn ${this.checkTurn()}`)

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




/*
    1. Introducir el punto de ruptura
    2. Filter filtra la primera casilla
*/

/*
        FLUJO
    1. Start -> recoger elementos DOM
    2. Capturar eventos click de la celda
    3. Método makeMove
        - Comprueba si celda libre
        - Añade celda a array de movimientos
        - Cambia el turno al otro jugador
        - Copia el array de movimientos
*/
