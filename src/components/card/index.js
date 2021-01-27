import React from 'react'
import Button from "../button";

import './card.scss'


const Card = ({title, text, activeBtn, btnText, isLink}) => {
    return (
        <div className="container">
            <div className="card-wrapper">
                <div className="card-title">{title}</div>
                <div className="card-text">{text}</div>
                {
                    activeBtn ? <Button btnText={btnText} isLink={isLink}/> : null
                }
            </div>
        </div>
    )
}

export default Card