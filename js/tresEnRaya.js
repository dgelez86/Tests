let player1 = {

    arrayJugadas: [],
    turn: true,
    victory: false,

    makeMove: function(cell) {
        // Comprobar si la casilla está libre (false)
        if (board.determineOcuppedCell(cell-1) === false) {
            // Añadir la casilla al array de movimientos del jugador
            this.arrayJugadas.push(cell)
            // Marcar la casilla como ocupada
            board.arrayCells[cell-1] = true
        }
        board.arrayJugadas = this.arrayJugadas
        this.victory = board.determineVictory()
    }

}

let player2 = {

    arrayJugadas: [],
    turn: true,
    victory: false,

    makeMove: function(cell) {
        // Comprobar si la casilla está libre (false)
        if (board.determineOcuppedCell(cell) === false) {
            // Añadir la casilla al array de movimientos del jugador
            this.arrayJugadas.push(cell)
            // Marcar la casilla como ocupada
            board.arrayCells[cell-1] = true
        }
        board.arrayJugadas = this.arrayJugadas
        this.victory = board.determineVictory()
    }

}

let board = { 

    count: 0,
    arrayCells: [false, false, false, false, false, false, false, false, false],
    arrayJugadas: [],
    combGanadoras: [
        [1,2,3], 
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,5,7],
        [3,6,9],
        [4,5,6],
        [7,8,9],
    ],

    determineVictory: function() {

        // Recorrer el array de arrays de combinaciones ganadoras
        for (let i = 0; i < this.combGanadoras.length; i++) {
            // Recorrer array de UNA combinación ganadora
            for (let j = 0; j < this.combGanadoras[i].length; j++) {
                // Recorrer array de movimientos del jugador
                for (let cell = 0 ; cell < this.arrayJugadas.length ; cell++) {
                    if (this.combGanadoras[i][j] === this.arrayJugadas[cell])
                        this.count++
                }
            }
            if (this.count != 3) this.count = 0
        } 
        if (this.count === 3) return true
        console.log(this.count)
        return false
    },

    // Comprobar si la casilla está libre (false)
    determineOcuppedCell: function(cell) {
        if (this.arrayCells[cell] === false) return false
        else return true
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
    events()
    playGame()

}

const events = () => {

    cell1.addEventListener("click", fillCell())
    cell2.addEventListener("click", fillCell())
    cell3.addEventListener("click", fillCell())
    cell4.addEventListener("click", fillCell())
    cell5.addEventListener("click", fillCell())
    cell6.addEventListener("click", fillCell())
    cell7.addEventListener("click", fillCell())
    cell8.addEventListener("click", fillCell())
    cell9.addEventListener("click", fillCell())

}

const fillCell = () => {

    switch (this.value) {

        case 1: cell1.innerHTML = determineCard(); break
        case 2: cell2.innerHTML = determineCard(); break
        case 3: cell3.innerHTML = determineCard(); break
        case 4: cell4.innerHTML = determineCard(); break
        case 5: cell5.innerHTML = determineCard(); break
        case 6: cell6.innerHTML = determineCard(); break
        case 7: cell7.innerHTML = determineCard(); break
        case 8: cell8.innerHTML = determineCard(); break
        case 9: cell9.innerHTML = determineCard()

    }

}

const determineCard = () => {

    if (player1.turn) return "x"
    else return "o"

}

const playGame = () => {

    const numMovements = 1
    let countMovements = 0
    let casillasLibres

    while ((countMovements != numMovements) && !(player1.victory == true || player2.victory == true)) {

        if (player1.turn) {
            console.log("Turno Jugador 1")
            player1.makeMove(parseInt(window.prompt()))
            countMovements++
            player1.turn = false
            player2.turn = true
        } else {
            console.log("Turno Jugador 2")
            player2.makeMove(parseInt(window.prompt()))
            countMovements++
            player2.turn = false
            player1.turn = true
        } 

        // console.log(`Movimiento actual ${countMovements}`)
        console.log(board.arrayCells)
        casillasLibres = board.arrayCells.map((el,index) => {
            if (el == false) el = index + 1
            return el
        }).filter(cell => cell == true)
        console.log(board.arrayCells)
        console.log(`Casillas libres: ${casillasLibres}`)
        // console.log(player1.count)
        // console.log(player1.victory)

    }

    if (player1.victory) return console.log("Player 1 won")
    if (player2.victory) return console.log("Player 2 won")

}

window.addEventListener("load", start)
