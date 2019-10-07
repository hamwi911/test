import React from "react";
import {Route, Redirect} from 'react-router-dom';
import LoginPage from "../pages/auth/LoginPage";


const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(!localStorage.getItem('isLogin')) return <Redirect to='/login'/>;
                return Component ? <Component {...props}/> : render (props)
            }}
        />
    );
}

export default ProtectedRoute;
