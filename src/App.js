import React, { Component } from 'react';
import classes from './App.css';
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/actions';


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

        <hr />

        <section className={classes.Section}>
        
          <button type="button" onClick={() => this.props.onSaveResult(this.props.ctr)}>Store Result</button>

          <ul>
            {
              this.props.storedResults.map(result => {
                  return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
              })
            }
          </ul>
        
        </section>
      </div>
    )
  }
}

const mapStateToDispatch = dispatch => {
  return {
    onIncrement: () => dispatch(actionCreators.increment()),
    onDecrement: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add({value: 10})),
    onSubtract: () => dispatch(actionCreators.subtract({value: 5})),
    onSaveResult: (ctrValue) => dispatch(actionCreators.saveResult(ctrValue)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctrRed.counter,
    storedResults: state.resRed.results
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
