import React, {Component} from 'react';
import classes from './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div>
                <form className={classes.SignupForm}>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username here"  />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter email here"  />
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" placeholder="Enter password here" />
                </div>
    
                <button type="button"> Signup</button>
                </form>
            </div>
            
        )
    }
}

export default Signup;
