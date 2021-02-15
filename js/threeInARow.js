const maxMoves = 9
let currMoves = 0

let player1 = {

    card: "x",
    playsDone: [],

    getCard: function() {
        return this.card
    },

    getPlaysDone: function() {
        return this.playsDone
    },

    /*
        Comprueba si el movimiento ha dado la victoria
            1. Recorre el array con las 8 combinaciones ganadoras
            2. Recorre el array de 3 posiciones de una combinación ganadora
            3. Recorre el array de movimientos del jugador
            4. Compara los movimientos del jugador con las combianciones ganadoras
            5. Si hay coincidencia, el contador de incrementa en 1. 
                Si el contador no es 3 una vez recorrido cada combinación ganadora, reiniciamos el contador
                Si el contador es 3, se determina la victoria del jugador poseedor del turno
    */
    checkVictory: function() {

        let count = 0
        console.log("combGanadoras " + game.winningCombs)
        // Recorre el array de las 8 combinaciones ganadoras
        for (let i = 0; i < game.winningCombs.length; i++) {
            console.log("combGanadoras actual " + game.winningCombs[i])
            // Recorre el array de 3 posiciones de una combinación ganadora
            for (let j = 0; j < game.winningCombs[i].length; j++) {
                console.info("mini combGanadoras " + game.winningCombs[i][j])
                // Recorre el array de movimientos del jugador
                for (let z = 0 ; z < this.playsDone.length ; z++) {
                    console.log("Casilla jugador " + this.playsDone[z])
                    console.warn("Contador antes " + count)
                    if (game.winningCombs[i][j] === this.playsDone[z]) {
                        count++
                    }
                    console.warn("Contador después " + count)
                }            
            }
            // Una vez recorrido el array de cada combinación ganadora, si el contador no es 3, reiniciamos el contador. Si es 3, se determina la victoria del jugador poseedor del turno
            if (count < 3) count = 0
            else game.victory = 1

        }
        console.error(this.playsDone)

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
    },

    checkVictory: function() {

        let count = 0
        // Recorre el array de las 8 combinaciones ganadoras
        for (let i = 0; i < game.winningCombs.length; i++) {
            // Recorre el array de 3 posiciones de una combinación ganadora
            for (let j = 0; j < game.winningCombs[i].length; j++) {
                // Recorre el array de movimientos del jugador
                for (let z = 0 ; z < this.playsDone.length ; z++) {
                    if (game.winningCombs[i][j] === this.playsDone[z])
                        count++
                }
            }
            // Una vez recorrido el array de cada combinación ganadora, si el contador no es 3, reiniciamos el contador. Si es 3, se determina la victoria del jugador poseedor del turno
            if (count < 3) count = 0
            else game.victory = 2

        }

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
    // Contador de las coincidencias de los movimientos del jugador con las apuestas ganadoras. Deben ser 3 para ganar el juego
    count: 0,
    // Valor 1 expresa el turno del jugador 1
    turn: 1,
    // Valor 1 espresa la victoria del jugador 1
    victory: 0,
    // Variable que guarda la casilla jugada en el turno independientemente del jugador
    playerPlay: 0,
    // Combinaciones ganadoras
    winningCombs: [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9],],
    // Determina fin del juego
    end: false,

    getPlayerCard: function() {
        if (this.turn === 1) return player1.getCard()
        if (this.turn === 2) return player2.getCard()
    },

    getVictory: function() {
        return this.victory
    },

    /* Método al que llama el evento click. Su función es:
        1. Comprueba que la casilla elegida está libre (false)
        2. Si está libre, guarda la casilla en la variable playerPlay
        3. Marca la casilla como ocupada (true)
        4. Copia el movimiento en el array de jugadas del jugador que lo ha hecho
        5. Llama al método para cambiar el turno
        6. Marca la casilla como ocupada en el html
        7. Comprueba si el movimiento ha dado la victoria
        8. Muestra información del estado actual juego
        9. Incrementa los movimientos actuales en uno
    */
    makeMove: function(cell) {

        if ((currMoves != maxMoves) && !(game.getVictory() != 0)) {

            if (board.checkOcuppiedCell(cell-1) === false) {
                this.playerPlay = cell
                board.ocuppiedCells[cell-1] = true
            }
            this.copyPlay()
            this.changeTurn()
            this.fillCell(cell)
            if (this.checkTurn() === 1) player1.checkVictory()
            else player2.checkVictory()
            this.displayInfo()
            currMoves++

        } else {
            this.end = true
            this.displayInfo()
        }
        
        
    },

    // Marca la casilla como ocupada en el html
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

    // Copia el movimiento en el array de jugadas del jugador que lo ha hecho
    copyPlay: function() {

        // Añade la jugada del objeto game al array de jugadas del jugador
        if (this.checkTurn() === 1) {
            player1.playsDone.push(this.playerPlay)
            // console.log(this.playerPlay, player1.playsDone)
        }
            
        if (this.checkTurn() === 2) {
            player2.playsDone.push(this.playerPlay)
            // console.log(this.playerPlay, player2.playsDone)
        }
            

    },

    // Método para cambiar el turno
    changeTurn: function() {
        if (this.turn === 1) this.turn = 2
        else this.turn = 1
    },

    // Método que determina qué jugador posee el turno
    checkTurn: function() {
        if (this.turn === 1) return 1
        if (this.turn === 2) return 2
    },

    displayInfo: function() {

        let stringToShow, stringTurn, stringFreeCells, stringWon, spaces = " "
        if (this.end === false) {

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
            stringTurn = "Limit reached."
            if (this.getVictory() === 0) stringWon = "Nobody won"
            if (this.getVictory() === 1) stringWon = "Player1 won"
            if (this.getVictory() === 2) stringWon = "Player2 won"
            stringToShow = stringTurn.concat(spaces).concat(stringWon)
        }

        display.innerHTML = stringToShow
        stringToShow = ""
        // console.log(this.count)

    }

}

const resetGame = () => {
    player1.playsDone = []
    player2.playsDone = []
    game.playerPlay = 0
    game.turn = 1
    cell1.innerHTML = ""
    cell2.innerHTML = ""
    cell3.innerHTML = ""
    cell4.innerHTML = ""
    cell5.innerHTML = ""
    cell6.innerHTML = ""
    cell7.innerHTML = ""
    cell8.innerHTML = ""
    cell9.innerHTML = ""
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
    const resetButton = document.getElementById('reset')
    // console.log(resetButton)
    events()

}

const events = () => {

    // resetButton.addEventListener("click", resetGame)
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
    1. Introducir el punto de ruptura --------------- resuelto
    2. Filter filtra la primera casilla
    3. Llamada del evento: ¿mala práctica?
    4. Errores de lógica:
        - Los jugadores están cambiados
        - La condición de victoria se muestra en el siguiente turno
    5. Error en el botón reset
*/

/*
        FLUJO
    1. Start -> recoger elementos DOM
    2. Capturar eventos click de la celda
    3. Método makeMove
*/
