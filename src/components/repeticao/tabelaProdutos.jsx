import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtoLista = produtos.map(produto => {
        return <tr>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$: {produto.preco}</td>
        </tr>
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoLista}
                </tbody>
            </table>
            <ul style={{ listStyle: 'none' }}>
            </ul>
        </div>
    )
}