import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Login.css';

class Login extends Component{
    

    authenticateUser(event) {
        
        event.preventDefault();
        let fd = new FormData(event.target);

        const data = {};
        for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }

        console.log(data);

    } 

    render() {
        return (
            <div>
            <form className={classes.LoginForm} onSubmit={this.authenticateUser}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter username here"  />
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" name="password" placeholder="Enter password here" />
                </div>
    
                <button> Login</button>
            </form>
            <NavLink to="/signup">Create Account</NavLink>
            </div>
        )
    }
}

export default Login;