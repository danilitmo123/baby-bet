import React from 'react'

import './button.scss'
import {Link} from "react-router-dom";

const Button = ({btnText, isLink}) => {
    return <>
        {
            isLink ? <Link to={'/payment'}>
                    <button className={'card-button'}>{btnText}</button>
                </Link>
                : <button className={'card-button'}><a href={'#pay'}>{btnText}</a></button>
        }
    </>

}

export default Button