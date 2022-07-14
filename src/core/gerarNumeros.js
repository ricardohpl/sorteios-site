function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
}

function gerarNumeros(qtde, numIni, numEnd) {
    const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(numIni, numEnd, nums)
                return [ ...nums, novoNumero]
            }, [])
            // .sort((n1, n2) => n1 - n2) // ordena baseado se é negativo ou positivo o retorno, para ordem decrescente é só mudar n2 - n1

    return numeros
}

export default gerarNumeros