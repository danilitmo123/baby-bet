import React, {Component} from 'react'

import './login-form.scss'
import close from "../../../assets/cancel.svg";
import Input from "../../input";
import CustomersService from "../../../service/CustomersService";
import axiosAuthInstance from "../../../axiosAuthApi";

class LoginForm extends Component {
    // я удалил рефы, потому что у меня уже был готовый код под стейты. И как с рефами делать
    // я не знаю :|

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // асинхроность, Детка.
    async handleSubmit(event) {
        event.preventDefault();
        try {
            const promise = await axiosAuthInstance.post('/token/obtain/', {
                email: this.state.username,
                password: this.state.password
            });
            const dataPromise = promise.data
            axiosAuthInstance.defaults.headers['Authorization'] = "JWT " + dataPromise.access;
            localStorage.setItem('access_token', dataPromise.access);
            localStorage.setItem('refresh_token', dataPromise.refresh);
            console.log(localStorage.getItem('access_token'))
            localStorage.setItem('logged_in', 'yes')
            this.props.setActive(false) // надеюсь эта штука закрывает окно входа...

            return promise;
        } catch (error) {
            console.log(error.stack);
            this.setState({
                errors: error.response.data
            });
        }
    }
  // А, чё, а где label для инпутов???
    render() {
        return (
            <form className={this.props.active ? 'login-wrapper active' : 'registration-wrapper'}
                  onClick={() => this.props.setActive(false)}>
                <div className={this.props.active ? "login-form active" : "registration-form"}
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
                        {/*<Input inputText={'Email'}/>*/}
                        {/*<Input inputText={'Пароль'}/>*/}
                        <div>{this.state.errors.non_field_errors ? this.state.errors.non_field_errors: null}</div>
                        <Input
                            onChange={this.handleChange}
                            type={'text'}
                            className={'form-control'}/>
                        {/*сообщение об ошибке. Надо как-то стилезовать.*/}
                            <div>{this.state.errors.email ? this.state.errors.email : null}</div>
                        <Input
                            onChange={this.handleChange}
                            type={'password'}
                            className={'form-control'}/>
                            <div>{this.state.errors.password ? this.state.errors.password : null}</div>
                        <button
                            type={'submit'}
                            onSubmit={this.handleSubmit}
                            className={'form-button'}>Войти
                        </button>
                        {/*onClick={() => this.props.setActive(false)} убрал так как возможно в форме ошибки */}
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm