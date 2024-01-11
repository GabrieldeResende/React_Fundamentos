import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <span>
            <FamiliaMembro nome='Gabriel'sobrenome='Resende'></FamiliaMembro>
            <FamiliaMembro nome='Adriana'{...props}></FamiliaMembro>
            <FamiliaMembro nome='Gustavo' sobrenome = {props.sobrenome}></FamiliaMembro>
        </span>
    )
}