import React, { Component } from 'react';
import classes from './Header.css';
import Aux from '../../../hoc/Aux';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Aux>
                {this.props.isAlreadyLoggedIn? 
                    <ul className={classes.Nav}>
                        <NavLink to="/">Dashboard</NavLink>
                        <NavLink to="/" onClick={this.props.logout}>Logout</NavLink> 
                    </ul>:
                    <ul className={classes.Nav}>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </ul>
                }
            </Aux>
        )   
    }
}

export default Header;