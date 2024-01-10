import React from 'react'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

const nome = <strong> Ola Gabriel </strong>

export default () => {
    return (
        <div>
            <h1>Fundamentos React (Arrow Function)</h1>
            <Aleatorio min={1} max={60}></Aleatorio>
            {nome}
            <Primeiro></Primeiro>
            <br></br>
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Muito Legal"></ComParametro>
            <Fragmento></Fragmento>
        </div>
    )
}