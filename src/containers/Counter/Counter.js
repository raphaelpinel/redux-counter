import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Counter.module.css';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component {
  render() {
    return (
      <div className={styles.Counter}>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add 5" />
        <CounterControl label="Subtract 5" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
