import React, {Component} from 'react';
import './LoginForm.scss'
import {login} from "../services/authService";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleGetInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };

    login = () => {
        this.props.LoginFun(this.state.email, this.state.password);
    };


    render() {
        return (
            <div className='login-form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.login();
                }}>
                    <input onChange={this.handleGetInput} type="text" name='email' placeholder='Email or Username'/>
                    <input onChange={this.handleGetInput} type="text" name='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
