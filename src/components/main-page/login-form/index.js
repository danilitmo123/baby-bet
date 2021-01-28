import React, {Component} from 'react'

import './login-form.scss'
import close from "../../../assets/cancel.svg";
import Input from "../../input";
import CustomersService from "../../../service/CustomersService";

const customersService = new CustomersService()

class LoginForm extends Component {

    handleCreate = () => {
        customersService.createUser(
            {
                'email': this.ref.email.value,
                'password': this.ref.password.value
            }
        ).then((result) => {
            console.log(result)
            alert('User create')
        }).catch(() => {
            alert('Error')
        })
    }

    handleSubmit = (event) => {
        this.handleCreate()
        event.preventDefault()
    }

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
                        <input
                            type={'text'}
                            ref={'email'}
                            className={'form-control'}/>
                        <input
                            type={'password'}
                            ref={'password'}
                            className={'form-control'}/>
                        <button
                            type={'submit'}
                            onClick={() => this.props.setActive(false)}
                            onSubmit={this.handleSubmit}
                            className={'form-button'}>Войти
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm