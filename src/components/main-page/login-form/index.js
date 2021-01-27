import React from 'react'

import './login-form.scss'
import close from "../../../assets/cancel.svg";
import Input from "../../input";

const LoginForm = ({active, setActive}) => {
    return (
        <div className={active ? 'login-wrapper active' : 'registration-wrapper'} onClick={() => setActive(false)}>
            <div className={active ? "login-form active" : "registration-form"} onClick={e => e.stopPropagation()}>
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
                    <button className={'form-button'}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm