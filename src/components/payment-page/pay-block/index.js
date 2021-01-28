import React, {Component} from 'react'

import './pay-block.scss'
import firstCalendar from '../../../assets/first-calendar.png'
import secondCalendar from '../../../assets/second-calendar.png'
import thirdCalendar from '../../../assets/third-calendar.png'
import fourthCalendar from '../../../assets/fourth-calendar.png'
import Input from "../../input";


const PRICE_FOR_TEXT = 1000
const PRICE_FOR_IMG = 500
const PRICE_FOR_PERSONALIZATION = 1500
const PRICE_FOR_SUGGESTIONS = 1200

class PayBlock extends Component {


    state = {
        firstActiveBlock: false,
        secondActiveBlock: false,
        thirdActiveBlock: false,
        fourthActiveBlock: false,
        initialPrice: 5000
    }

    toggleFirstActiveBlock = () => {
        this.setState((state) => {
            if (!state.firstActiveBlock) {
                this.setState({firstActiveBlock: !state.firstActiveBlock})
                this.setState({initialPrice: state.initialPrice + PRICE_FOR_TEXT})
            } else {
                this.setState({firstActiveBlock: !state.firstActiveBlock})
                this.setState({initialPrice: state.initialPrice - PRICE_FOR_TEXT})
            }
        })
    }

    toggleSecondActiveBlock = () => {
        this.setState((state) => {
            if (!state.secondActiveBlock) {
                this.setState({secondActiveBlock: !state.secondActiveBlock})
                this.setState({initialPrice: state.initialPrice + PRICE_FOR_IMG})
            } else {
                this.setState({secondActiveBlock: !state.secondActiveBlock})
                this.setState({initialPrice: state.initialPrice - PRICE_FOR_IMG})
            }
        })
    }

    toggleThirdActiveBlock = () => {
        this.setState((state) => {
            if (!state.thirdActiveBlock) {
                this.setState({thirdActiveBlock: !state.thirdActiveBlock})
                this.setState({initialPrice: state.initialPrice + PRICE_FOR_SUGGESTIONS})
            } else {
                this.setState({thirdActiveBlock: !state.thirdActiveBlock})
                this.setState({initialPrice: state.initialPrice - PRICE_FOR_SUGGESTIONS})
            }
        })
    }

    toggleFourthActiveBlock = () => {
        this.setState((state) => {
            if (!state.fourthActiveBlock) {
                this.setState({fourthActiveBlock: !state.fourthActiveBlock})
                this.setState({initialPrice: state.initialPrice + PRICE_FOR_PERSONALIZATION})
            } else {
                this.setState({fourthActiveBlock: !state.fourthActiveBlock})
                this.setState({initialPrice: state.initialPrice - PRICE_FOR_PERSONALIZATION})
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="choose-text">Выберите шаблон</div>
                <div className="calendars-wrapper">
                    <div className="first-items">
                        <img src={firstCalendar} alt=""/>
                        <img src={secondCalendar} alt=""/>
                    </div>
                    <div className="second-items">
                        <img src={thirdCalendar} alt=""/>
                        <img src={fourthCalendar} alt=""/>
                    </div>
                </div>
                <div className="choose-name">Укажите имя ребенка и месяц рождения</div>
                <div className="choose-name-inputs">
                    <Input inputText={'Имя ребенка'}/>
                    <Input inputText={'Месяц рождения'}/>
                </div>
                <div className="choose-info">Укажите номер телефона и почту</div>
                <div className="choose-name-inputs">
                    <Input inputText={'Email'}/>
                    <Input inputText={'Телефон'}/>
                </div>
                <div className="choose-upgrade">Улучшить календарь</div>
                <div className="upgrade-block">
                    <div
                        onClick={this.toggleFirstActiveBlock}
                        className={this.state.firstActiveBlock ? 'wrapper-text active' : 'wrapper-text not-active'}>
                        <div className={'blocks'}>Добавить индивидуальный текст</div>
                    </div>
                    <div
                        onClick={this.toggleSecondActiveBlock}
                        className={this.state.secondActiveBlock ? 'wrapper-text active' : 'wrapper-text not-active'}>
                        <div className="blocks">Вставить собственную картинку</div>
                    </div>
                    <div
                        onClick={this.toggleThirdActiveBlock}
                        className={this.state.thirdActiveBlock ? 'wrapper-text active' : 'wrapper-text not-active'}>
                        <div className="blocks">Добавить отображение пожеланий</div>
                    </div>
                    <div
                        onClick={this.toggleFourthActiveBlock}
                        className={this.state.fourthActiveBlock ? 'wrapper-text active' : 'wrapper-text not-active'}>
                        <div className="blocks">Добавить персонализированные поля</div>
                    </div>
                </div>
                <div className="choose-individual">Персонализировать каленадарь</div>

                <div className="total-price">Итоговая цена: {this.state.initialPrice}</div>
            </div>
        )
    }
}

export default PayBlock