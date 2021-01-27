import React from 'react'
import Card from "../../card";

import './pay-block.scss'

const PayBlock = () => {
    return (
        <div className="pay-block-wrapper">
            <div className="container">
                <div className="pay-block-title"><a name="pay">Тарифы</a></div>
                <div className="pay-cards">
                    <Card
                        title={'Базовый'}
                        text={'Наш шаблон, изменение цвета фона, шрифта и текста.'}
                        activeBtn={true}
                        btnText={'Узнать больше'}
                        isLink={true}

                    />
                    <Card
                        title={'Улучшенный'}
                        text={'Добавление персонализированных полей, полное изменение фона '}
                        activeBtn={true}
                        btnText={'Узнать больше'}
                        isLink={true}
                    />
                    <Card
                        title={'VIP'}
                        text={'Персонализированный календарь'}
                        activeBtn={true}
                        btnText={'Узнать больше'}
                        isLink={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default PayBlock