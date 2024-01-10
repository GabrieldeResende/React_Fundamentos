import React from 'react'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const nome = <strong> Ola Gabriel </strong>

export default () => {
    return (
        <div>
            <h1>Fundamentos React (Arrow Function)</h1>
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