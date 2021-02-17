const maxMoves = 10
let resetButton1, currMoves = 1, reset = false

let board = { 

    occupiedCells: [false, false, false, false, false, false, false, false, false],

    getOccupiedCells: function() {
        return this.occupiedCells
    },

    // Comprobar si la casilla está libre (false)
    checkOccupiedCell: function(cell) {
        return this.occupiedCells[cell-1]
    },

    // Escribir la casilla como ocupada (true) si está libre (false)
    setCellAsOccuppied: function(cell) {
        if (!this.checkOccupiedCell()) {
            this.occupiedCells[cell-1] = true
            return true
        } else
            return false
    },

    resetOccupiedCells: function() {
        this.occupiedCells = [false, false, false, false, false, false, false, false, false]
    },

    // Marca la casilla como ocupada en el html
    fillCell: function(cellArray, cell) {

        if (reset) {

            cellArray.forEach(el => {
                el.innerHTML = ""
            })

        } else {

            let card = main.turn === "player1" ? main.card1 : main.card2 
            cellArray.forEach((el, index) => {
            if (cell === index+1)
                el.innerHTML = card

            })
        }

    },

}

let main = {

    card1: "x",
    card2: "o",
    turn: "player1",
    victory: "nobody",
    end: false,
    // Variables que guardan los movimientos de cada jugador
    player1Plays: [],
    player2Plays: [],
    // Combinaciones ganadoras
    winningCombs: [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9],],
    // Determina fin del juego

    setTurn: function() {
        this.turn = currMoves % 2 === 0 ? "player1" : "player2"
    }, 

    setPlayer1Plays(play) {
        this.player1Plays.push(play)
    },

    setPlayer2Plays(play) {
        this.player2Plays.push(play)
    },

    resetMain: function() {

        this.player1Plays = []
        this.player2Plays = []
        this.victory = "nobody"
        this.turn = "player1"
        this.end = false
        this.displayInfo()

    },

    /*
        Método al que llama el evento click. Su función es:
            1. Comprueba que la casilla elegida está libre (false)
            2. Si está libre, guarda la casilla en la variable cellPlayed
            3. Marca la casilla como ocupada (true)
            4. Copia el movimiento en el array de jugadas del jugador que lo ha hecho
            5. Llama al método para cambiar el turno
            6. Marca la casilla como ocupada en el html
            7. Comprueba si el movimiento ha dado la victoria
            8. Muestra información del estado actual juego
            9. Incrementa los movimientos actuales en uno
    */
    makeMove: function(cellArray, cell) {

        if ((currMoves != maxMoves) && (this.victory === "nobody")) {

            let repeatMovement = false
            do {
                repeatMovement = board.setCellAsOccuppied(cell)
            } while (!repeatMovement)     
            board.fillCell(cellArray, cell)
            if (this.turn === "player1")
                this.setPlayer1Plays(cell)
            else
                this.setPlayer2Plays(cell)
            this.checkVictory()
            this.displayInfo()
            this.setTurn()
            currMoves++

        } else {

            this.end = true
            this.displayInfo()

        }
 
    },

    checkVictory: function() {

        let count = 0

        if (this.turn === "player1") {

            // Recorre el array de las 8 combinaciones ganadoras
            for (let i = 0; i < this.winningCombs.length; i++) {

                // Recorre el array de 3 posiciones de una combinación ganadora
                for (let j = 0; j < this.winningCombs[i].length; j++) {
                    // Recorre el array de movimientos del jugador
                    for (let z = 0 ; z < this.player1Plays.length ; z++) {
                        if (this.winningCombs[i][j] === this.player1Plays[z])
                            count++
                    }            
                }
            // Una vez recorrido el array de cada combinación ganadora, si el contador no es 3, reiniciamos el contador. Si es 3, se determina la victoria del jugador poseedor del turno
            if (count < 3) 
                count = 0
            else 
                this.victory = "player1"

            }

        } else {

            // Recorre el array de las 8 combinaciones ganadoras
            for (let i = 0; i < this.winningCombs.length; i++) {

                // Recorre el array de 3 posiciones de una combinación ganadora
                for (let j = 0; j < this.winningCombs[i].length; j++) {
                    // Recorre el array de movimientos del jugador
                    for (let z = 0 ; z < this.player2Plays.length ; z++) {
                        if (this.winningCombs[i][j] === this.player2Plays[z])
                            count++
                    }            
                }
            // Una vez recorrido el array de cada combinación ganadora, si el contador no es 3, reiniciamos el contador. Si es 3, se determina la victoria del jugador poseedor del turno
            if (count < 3) 
                count = 0
            else 
                this.victory = "player2"

            }

        }  

    },

    displayInfo: function() {

        let stringToShow, stringTurn, stringFreeCells, stringWon, spaces = " "

        if (this.end === false) {

            if (this.turn === "player1") stringTurn = "Player 2 turn. "
            if (this.turn === "player2") stringTurn = "Player 1 turn. "
            stringFreeCells = `Free cells: ${board.getOccupiedCells().map((el,index) => {
                if (el === false) el = " " + (index+1)
                    return el
                }).filter(el => el !== true)}.`
            if (this.victory === "nobody") stringWon = "Nobody won"
            if (this.victory === "player1") stringWon = "Player1 won"
            if (this.victory === "player2") stringWon = "Player2 won"

            stringToShow = stringTurn.concat(spaces).concat(stringFreeCells).concat(spaces).concat(stringWon)

        } else {
            stringTurn = "Limit reached."
            if (this.victory === "nobody") stringWon = "Nobody won"
            if (this.victory === "player1") stringWon = "Player1 won"
            if (this.victory === "player2") stringWon = "Player2 won"
            stringToShow = stringTurn.concat(spaces).concat(stringWon)
        }

        display.innerHTML = stringToShow
        stringToShow = ""
        if (reset) {
            display.innerHTML = stringToShow
            reset = false
        }

    }

}

const resetGame = (cellArray) => {

    reset = true
    currMoves = 1
    board.resetOccupiedCells()
    board.fillCell(cellArray)
    main.resetMain()

}

const start = () => {

    const cell = []
    for (let i = 0 ; i < 9 ; i++) {
        cell[i] = document.getElementById('cell' + (i+1))
    }

    const display = document.getElementById('display')
    resetButton1 = document.getElementById('reset').addEventListener("click", () => resetGame(cell))
    events(cell)
    
}

const events = (cellArray) => {

    cellArray.forEach((el, index) => {
        el.addEventListener("click", () => main.makeMove(cellArray, index+1))
    });

}


window.addEventListener("load", start)




/*
    REVISAR
        - Desacoplamiento
*/

/*
        FLUJO
    1. Start -> recoger elementos DOM
    2. Capturar eventos click de la celda
    3. Método makeMove
*/
