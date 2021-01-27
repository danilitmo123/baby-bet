import React from 'react'
import Card from "../../card";

import './info-block.scss'

const InfoBlock = () => {
    return (
        <div className="info-block-wrapper">
            <div className="container">
                <div className="info-block-title">Как это работает ?</div>
                <div className="info-block-cards">
                    <div className="info-card">
                        <div className="first-item-block">
                            <Card
                                title={'Оставь заявку'}
                                text={'Регистрируйся прямо сейчас и получи от нас приятный подарок, для этого нужно сделать всего 3 клика.'}
                                activeBtn={false}
                            />
                            <Card
                                title={'Выбери шаблон'}
                                text={'У нас есть 10 классных шаблонов и широкие возможности для персонализации.'}
                                activeBtn={false}
                            />
                        </div>
                        <div className="second-item-block">
                            <Card
                                title={'Наша команда свяжется с вами'}
                                text={'Instagram? WhatsApp? Mail?  Свяжемся где угодно и в удобное для вас время.'}
                                activeBtn={false}
                            />
                            <Card
                                title={'Приглаcи друзей, игра началась'}
                                text={'Такого они точно не видели.'}
                                activeBtn={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock