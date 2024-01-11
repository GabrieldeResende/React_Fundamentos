import React from 'react'
import Alunos from '../../data/Alunos'

export default props => {
    const li1 = (
        <li>
            {Alunos[0].id} {Alunos[0].nome} {Alunos[0].nota}
        </li>

    )
    const lis = Alunos.map(aluno => {
        return <li key={aluno.id}> {aluno.id} {aluno.nome} {aluno.nota} </li>
    })
    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}