import React from 'react'

import charityPhoto from '../../../assets/charity-photo.png'

import './charity-block.scss'

const CharityBlock = () => {
    return (
        <div className="charity-block-wrapper">
            <div className="container">
                <div className="charity-title"><a name={'charity'}>Благотворительность</a></div>
                <div className="charity-info-wrapper">
                    <div className="charity-logo">
                        <img src={charityPhoto} alt="charityPhoto"/>
                    </div>
                    <div className="charity-text">
                        Заказывая календарь для вашего ребенка, вы можете согласиться отчислять процент от каждого
                        перевода (по умолчанию это 10%, но всегда можно отдать чуть больше) в благотворительный фонд
                        “Подарок Ангелу” (вставить гиперссылку на их сайт), который занимается поддержкой детей и
                        взрослых с серьезными нарушениями опорно-двигательного аппарата.
                        Благодаря, вашей помощи ребенок сможет получить решающий вклад в важную реабилитацию, которая
                        станет шагом к жизни без костылей и косых взглядов, или получить спортивный комплекс для
                        домашней реабилитации.<br/><br/>
                        Узнать подробнее о работе фонда “Подарок Ангелу” - https://podarokangelu.com/about
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CharityBlock