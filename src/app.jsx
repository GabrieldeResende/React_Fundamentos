import React from 'react'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/tabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

const nome = <strong> Ola Gabriel </strong>

export default () => {
    return (
        <div>
            <h1>Fundamentos React (Arrow Function)</h1>

            <div className='Exercicios'>

                <Card titulo='Mega'>
                    <Mega></Mega>
                </Card>
                <Card titulo='Contador'>
                    <Contador numeroInicial = {10}></Contador>
                </Card>
                <Card titulo='Condicional'>
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>
                <Card titulo='Tabela Produtos'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo='Repetição'>
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo='Componente Filho'>
                    <Familia sobrenome='Resende'></Familia>
                </Card>
                <Card titulo='Aleatorio'>
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>
                <Card titulo='Fragmento'>
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo='Primeiro Componente'>
                    <Primeiro></Primeiro>
                </Card>
                {/* {nome} */}
                {/* <br></br> */}
                <Card titulo='Segundo Componente'>
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal"></ComParametro>
                </Card>
            </div>
        </div>
    )
}