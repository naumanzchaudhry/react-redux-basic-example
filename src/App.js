import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';


class App extends Component {
  state = {
    alreadyLogedIn: true
  }

  logout = () => {
    this.setState({
      alreadyLogedIn: false
    })
  }

  render() {
    return (
      <BrowserRouter>
       <Aux> 
        <Layout isAlreadyLoggedIn={this.state.alreadyLogedIn} 
         logout={this.logout} />
        <Route path="/" exact Component={App} />
       </Aux>
      </BrowserRouter>
    )
  }
}

export default App;
