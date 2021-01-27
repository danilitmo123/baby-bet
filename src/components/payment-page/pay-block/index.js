import React, {Component} from 'react'

import './pay-block.scss'
import firstCalendar from '../../../assets/first-calendar.png'
import secondCalendar from '../../../assets/second-calendar.png'
import thirdCalendar from '../../../assets/third-calendar.png'
import fourthCalendar from '../../../assets/fourth-calendar.png'
import Input from "../../input";


// class PayBlock extends Component{
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             toggleClass: false
//         }
//     }
//
//     toggleFunc = () => {
//         this.setState({toggleClass: !this.state.toggleClass})
//     }
//
//     render() {
//         return(
//             <div>
//                 <button className={'btn'} >Click Me</button>
//                 <div
//                     onClick={this.toggleFunc}
//                     className={this.state.toggleClass ? 'wrapper classOnTrue' : 'wrapper classOnFalse'}>hello world</div>
//             </div>
//         )
//     }
// }
//
// export default PayBlock


class PayBlock extends Component {

    state = {
        firstActiveBlock: false,
        secondActiveBlock: false,
        thirdActiveBlock: false,
        fourthActiveBlock: false
    }

    toggleFirstActiveBlock = () => {
        this.setState({firstActiveBlock: !this.state.firstActiveBlock})
    }

    toggleSecondActiveBlock = () => {
        this.setState({secondActiveBlock: !this.state.secondActiveBlock})
    }

    toggleThirdActiveBlock = () => {
        this.setState({thirdActiveBlock: !this.state.thirdActiveBlock})
    }

    toggleFourthActiveBlock = () => {
        this.setState({fourthActiveBlock: !this.state.fourthActiveBlock})
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
                <div className="total-price">Итоговая цена: 5000</div>
            </div>
        )
    }
}

export default PayBlock