import React, { Component } from 'react';
import classes from './App.css';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div>
        <div className={classes.Header}>
            <h1>Counter: {this.props.ctr}</h1>
        </div>

        <section className={classes.Section}>
            <button type="button" onClick={this.props.onIncrement}>Increment</button>
            <button type="button" onClick={this.props.onDecrement}>Decrement</button>
            <button type="button" onClick={this.props.onAdd}>Add 10</button>
            <button type="button" onClick={this.props.onSubtract}>Subtract 5</button>
        </section>
      </div>
    )
  }
}

const mapStateToDispatch = dispatch => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onAdd: () => dispatch(
      {
        type:'ADD',
        payload: {
          value: 10
        }
      }
    ),
    onSubtract: () => dispatch(
      {
        type:'SUBTRACT',
        payload: {
          value: 5
        }
      }
    ),
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
