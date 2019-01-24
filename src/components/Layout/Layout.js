import React, { Component } from 'react';
import Header from './Header/Header';
import MainPanel from './MainPanel/MainPanel';

// import Aux from '../../hoc/Aux';
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.SiteContainer}>
               <div className={classes.HeaderPanel}>
                <Header logout={this.props.logout} isAlreadyLoggedIn={this.props.isAlreadyLoggedIn} title="Demo App" />
               </div>

               <div className={classes.MainPanel}>
                <MainPanel isAlreadyLoggedIn={this.props.isAlreadyLoggedIn} />
               </div>
            </div>
        )
    }
    
}

export default Layout;