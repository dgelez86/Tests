let player1 = {

    arrayJugadas: [],
    turn: true,
    count: 0,
    victory: false,

    makeMove: function(cell) {
        for (let i = 0; i < board.arrayCells.length; i++) {
            if (board.arrayCells[i] === false) {
                this.arrayJugadas.push(cell)
                 board.arrayCells[cell-1] = true
            }
        }

        for (let cel = 0 ; cel < this.arrayJugadas.length ; cel++) {
            for (let i = 0; i < board.combGanadoras.length; i++) {
                for (let j = 0; j < board.combGanadoras[i].length; j++) {
                    // console.log(board.combGanadoras[i][j], this.arrayJugadas[cel])
                    if (board.combGanadoras[i][j] === this.arrayJugadas[cel])
                    this.count++
                }
            }
        } 
        if (this.count == 3) this.victory = true
    }

}

let player2 = {

    ficha: "O",
    arrayJugadas: [],
    turn: false,
    count: 0,
    victory: false,

    makeMove: function(cell) {
        for (let i = 0; i < board.arrayCells.length; i++) {
            if (board.arrayCells[i] === false) {
                this.arrayJugadas.push(cell)
                 board.arrayCells[cell-1] = true
            }
        }

        for (let cel = 0 ; cel < this.arrayJugadas.length ; cel++) {
            for (let i = 0; i < board.combGanadoras.length; i++) {
                for (let j = 0; j < board.combGanadoras[i].length; j++) {
                    // console.log(board.combGanadoras[i][j], this.arrayJugadas[cel])
                    if (board.combGanadoras[i][j] === this.arrayJugadas[cel])
                    this.count++
                }
            }
        } 
        if (this.count == 3) this.victory = true
    }

}

let board = { 

    arrayCells: [false, false, false, false, false, false, false, false, false],
    combGanadoras: [
        [1,2,3], 
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,5,7],
        [3,6,9],
        [4,5,6],
        [7,8,9],
    ]

}

const start = () => {

    const numMovements = 9
    let countMovements = 0
    let casillasLibres

    while ((countMovements != numMovements) || player1.victory || player2.victory) {

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

        console.log(`Movimiento actual ${countMovements}`)
        casillasLibres = board.arrayCells.filter(cell => cell == false).map(el => el = "cell" + el.index)
        // console.log(`Casillas libres: ${casillasLibres}`)
        // console.log(player1.count)
        // console.log(player1.victory)

    }

}


window.addEventListener("load", start)
