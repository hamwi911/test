import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm";
import './authStyle.scss'
import {login} from "../../services/authService";

class LoginPage extends Component {

    componentDidMount() {
        if(localStorage.getItem('isLogin')){
            this.props.history.push('/');
        }
    }

    handleLogin = async (email, password) => {
        const islogin = await login(email, password);
        if(islogin){
            localStorage.setItem('isLogin', true);
            this.props.history.push('/');
        }
    };
    render() {
        return (
            <div className='login-parent'>
                <h1>Login Form</h1>
                <LoginForm LoginFun={this.handleLogin}/>
            </div>
        );
    }
}

export default LoginPage;
