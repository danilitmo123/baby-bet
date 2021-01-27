import React from 'react'
import logo from '../../assets/white-logo.svg'

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-nav-bar">
                    <div className="footer-logo">
                        <img src={logo} alt=""/>
                        <div className="footer-text">WHATDAY</div>
                    </div>
                    <div className="about-us">
                        <div className="about-us-title">O нас</div>
                        <div className="nav-items">
                            <div className="item">Компания</div>
                            <div className="item">Тарифы</div>
                            <div className="item">Благотворительность</div>
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="contacts-title">Контакты</div>
                        <div className="nav-items">
                            <div className="item">+7(xxx)xxx-xx-xx</div>
                            <div className="item">WhatsApp: +7(xxx)xxx-xx-xx</div>
                            <div className="item">Instagram: lalallala</div>
                        </div>
                    </div>
                    <div className="downloads">
                        <div className="downloads-title">Скачать</div>
                        <div className="nav-items">
                            <div className="item">IOS</div>
                            <div className="item">Android</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer