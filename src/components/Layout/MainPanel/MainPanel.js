import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../../Auth/Auth';
import Dashboard from '../../Dashboard/Dashboard';
import Aux from '../../../hoc/Aux';

class MainPanel extends Component {
    render() {
        return (
            <Aux>
                {this.props.isAlreadyLoggedIn?
                    <Redirect to="/dashboard" component={Dashboard} />
                    : <Aux><Route path="/login" component={Auth} /> <Route path="/signup" component={Auth} /></Aux>
                }
                <Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}> Hello World </h1>} />
                <Route path="/dashboard" component={Dashboard} />
            </Aux>
        )
    }
}

export default MainPanel;