
const escribe = msg => {   

    const $body = document.querySelector('body')
    const $message = document.createElement('p')
    $message.innerHTML = msg
    $body.appendChild($message)

}

const printString = string => {
    
    return new Promise(resolve => {
        setTimeout(() => {resolve(string)},Math.floor(Math.random() * 100) + 1)
    })
    

}

const printPrecuela = () => {

    return new Promise(resolve => {

        printString()
            .then(() => {return 'Episodio I: la amenaza fantasma'})
            .then(() => {return 'Episodio II: el ataque de los clones'})
            .then(() => 'Episodio III: la venganza de los sith')
        resolve()

    })

}

const printParalelas = () => {

    return new Promise(resolve => {
        
        printString('Rogue One: una historia de Star Wars')
        printString('Han Solo')
        resolve()

    })

}

const printOriginal = () => {

    return new Promise(resolve => {

        printString('Episodio IV: una nueva esperanza')
        printString('Episodio V: el imperio contraataca')
        printString('Episodio VI: el regreso del jedi')
        resolve()

    })
  


}

const printSecuelas = () => {

    printString('Episodio VII: el despertar de la fuerza')
    printString('Episodio VIII: el último jedi')
    printString('Episodio IX: el ascenso de Skywalker')

}

const printAll = () => {

    return new Promise(resolve => {
        resolve()
    })

}

printAll()
    .then(() => {return printPrecuela()})
    .then(() => {return printOriginal()})
    .then(() => {return printParalelas()})
    .then(printSecuelas())