function generateNumberNotIncluded(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
        generateNumberNotIncluded(min, max, array) :
        aleatorio
}

function generateNumbers(quantity, numIni, numEnd) {
    const numeros = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = generateNumberNotIncluded(numIni, numEnd, nums)
                return [ ...nums, novoNumero]
            }, [])

    return numeros
}

export default generateNumbers