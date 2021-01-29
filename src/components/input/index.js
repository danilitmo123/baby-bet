import React from 'react'

import './input.scss'

const Input = ({inputText, onChange, Name, type}) => {
    return (
        <div className="input-wrapper">
            <div className={"input-text"}>{inputText}</div>
            <input  name={Name} onChange={onChange} type={type}/>
        </div>
    )
}

export default Input