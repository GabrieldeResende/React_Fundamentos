function gerarNumerosNaoContidos(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return array.includes(aleatorio) ? gerarNumerosNaoContidos(min, max, array) : aleatorio
}

function gerarNumeros(qtde) {
    const numeros = Array(qtde).fill(0).reduce((nums) => {
        const novoNumero = gerarNumerosNaoContidos(1, 60, nums)
        // console.log([...nums, novoNumero]);
        return [...nums, novoNumero] 
    }, []).sort((n1, n2) => n1 - n2)

    return numeros
}

// gerarNumerosNaoContidos(1, 60 [0, 0, 0, 0, 0, 0])