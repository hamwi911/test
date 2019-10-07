import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import Index from "./pages/index/Index";
import ProtectedRoute from "./components/protectedRoute";
import LyricPage from "./pages/lyric/LyricPage";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }


    render() {
        const isUserLogin = this.state.isLogin;
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Index}/>
                        {/*<Route exact path='/lyrics/track/:id' component={LyricPage}/>*/}
                        <ProtectedRoute path='/lyrics/track/:id' component={LyricPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
