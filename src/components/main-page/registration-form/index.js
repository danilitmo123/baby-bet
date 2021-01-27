import React, {Component} from 'react'

import './registration-form.scss'
import Input from "../../input";

import close from '../../../assets/cancel.svg'


const RegistrationForm = ({active, setActive}) => {
    return (
        <div className={active ? 'registration-wrapper active' : 'registration-wrapper'}
             onClick={() => setActive(false)}>
            <div className={active ? "registration-form active" : "registration-form"}
                 onClick={e => e.stopPropagation()}>
                <div className="wrapper-title">
                    <div className="registration-title">Добро пожаловать</div>
                    <img
                        className={'close-img'}
                        src={close}
                        alt=""
                        onClick={() => setActive(false)}/>
                </div>
                <div className="inputs-wrapper">
                    <Input inputText={'Email'}/>
                    <Input inputText={'Пароль'}/>
                    <Input inputText={'Подтвердите пароль'}/>
                    <button className={'form-button'}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm