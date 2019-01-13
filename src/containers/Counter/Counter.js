import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Counter.module.css';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import StoreResult from '../../components/StoreResult/StoreResult';

class Counter extends Component {
  render() {
    return (
      <div className={styles.Counter}>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <StoreResult />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
    onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
