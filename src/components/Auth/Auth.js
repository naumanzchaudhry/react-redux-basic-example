import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import classes from './Auth.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';


class Auth extends Component {
    render() {
        return (
            <div className={classes.AuthSection}>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
            </div>
        )
    }
}

export default Auth;

