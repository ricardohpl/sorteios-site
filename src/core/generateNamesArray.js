import gerarNumeros from "./gerarNumeros"


function generateNamesArray(names) {
    let numIni = 0
    let numEnd = names.length - 1
    let qtd = names.length

    let raffleCodeNames = gerarNumeros(qtd, numIni, numEnd)
    let newNames = []

    for (let i = 0; i <= numEnd; i++) {
        newNames.push(names[+raffleCodeNames[i]])
    }

    console.log(raffleCodeNames, newNames)
    return newNames

}


export default generateNamesArray