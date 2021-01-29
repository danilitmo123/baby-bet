import React, {Component} from 'react'

import './registration-form.scss'
import Input from "../../input";

import close from '../../../assets/cancel.svg'
import axiosAuthInstance from "../../../axiosAuthApi";

// ААААААААААААА. почему это не компонент.
class RegistrationForm extends Component {
    // Теперь компонент. Надеюсь, ничего не сломал.
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            password_confirm: "",
            email: "",
            errors: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('changed')
        console.log(event.target.name)

        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        // this.state.errors.clear()
        if (this.state.password !== this.state.password_confirm){
            this.state.errors.password = 'Пароли не овпадают'
        }
        try {
            const response = await axiosAuthInstance.post('/user/create', {
                email: this.state.email,
                password: this.state.password,
                password_confirm: this.state.password_confirm
            });
            console.log('success')
            // this.props.setActive(false)
            alert('Вы успешно зарегистрировались!\nТеперь войдите на сайт.')
            return response;
        } catch (error) {
            console.log(error.stack);
            try {
                this.setState({
                    errors: error.response.data
                });
            } catch (error){

            }
        }
    }

    render() {
        return (
            <div className={this.props.active ? 'registration-wrapper active' : 'registration-wrapper'}
                 onClick={() => this.props.setActive(false)}>
                <form className={this.props.active ? "registration-form active" : "registration-form"}
                     onClick={e => e.stopPropagation()}>
                    <div className="wrapper-title">
                        <div className="registration-title">Добро пожаловать</div>
                        <img
                            className={'close-img'}
                            src={close}
                            alt=""
                            onClick={() => this.props.setActive(false)}/>
                    </div>
                    <div className="inputs-wrapper">
                         <div>{this.state.errors.non_field_errors ? this.state.errors.non_field_errors: null}</div>
                        <Input type={'text'} Name={'email'} inputText={'Email'} onChange={this.handleChange}/>
                        <div>{this.state.errors.email ? this.state.errors.email : null}</div>
                        <Input type={'password'} Name={'password'} inputText={'Пароль'} onChange={this.handleChange}/>
                        <div>{this.state.errors.email ? this.state.errors.email : null}</div>
                        <Input type={'password'} Name={'password_confirm'} inputText={'Подтвердите пароль'} onChange={this.handleChange}/>
                        <div>{this.state.errors.email ? this.state.errors.email : null}</div>
                        <button className={'form-button'} onClick={this.handleSubmit}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm