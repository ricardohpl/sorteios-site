import generateNumbers from "./generateNumbers"


function generateNamesArray(names, quantity) {
    let numIni = 0
    let numEnd = names.length - 1

    let raffleCodeNames = generateNumbers(quantity, numIni, numEnd)
    let newNames = []

    for (let i = 0; i <= (quantity - 1); i++) {
        newNames.push(names[+raffleCodeNames[i]])
    }

    return newNames

}


export default generateNamesArray