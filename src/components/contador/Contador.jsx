import React from 'react'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial
    }

    incremento = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }
    render() {

        return (
            <div>
                <h2>Contador</h2>
                <p>Valor inicial: {this.state.numero}</p>
                <button onClick={e => this.incremento()}>+</button>
                <button onClick={e => this.decremento()}>-</button>
            </div>
        )
    }
}