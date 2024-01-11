import React, { useState } from 'react'

export default props => {

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

    const qtde = props.qtde || 6
    const [numeros, setNumeros ] = useState(Array(qtde).fill(0))

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}