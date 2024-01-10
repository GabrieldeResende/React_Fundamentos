export default props => {
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Aleatorio</h2>
            <p><strong>Valor Minimo: </strong> {props.min}</p>
            <p><strong>Valor Maximo: </strong> {props.max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    )
}