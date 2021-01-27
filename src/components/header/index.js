import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './header.scss'

import logo from '../../assets/purple-logo.svg'
import RegistrationForm from "../main-page/registration-form";
import LoginForm from "../main-page/login-form";

const Header = () => {

    const [regActive, setRegActive] = useState(false)
    const [logActive, setLogActive] = useState(false)

    return (
        <div className={"container"}>
            <div className={"header-wrapper"}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'}/>
                    </Link>
                </div>
                <div className={"header-nav"}>
                    <div
                        className={'header-nav-items'}><a href={'#charity'}>Благотворительность</a></div>
                    <div className={'header-nav-items'}><a href={'#pay'}>Сделать заказ</a></div>
                    <div
                        className={'header-nav-items'}
                        onClick={() => setRegActive(true)}
                    >Регистрация
                    </div>
                    <div
                        className={'header-nav-items'}
                        onClick={() => setLogActive(true)}
                    >Войти
                    </div>
                    <RegistrationForm active={regActive} setActive={setRegActive}/>
                    <LoginForm active={logActive} setActive={setLogActive}/>
                </div>
            </div>
        </div>
    )
}

export default Header
