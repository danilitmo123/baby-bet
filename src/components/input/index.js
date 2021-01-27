import React from 'react'

import './input.scss'

const Input = ({inputText}) => {
    return (
        <div className="input-wrapper">
            <div className="input-text">{inputText}</div>
            <input type="text"/>
        </div>
    )
}

export default Input