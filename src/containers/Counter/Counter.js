import React, { Component } from 'react';
import styles from './Counter.module.css';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component {
  render() {
    return (
      <div className={styles.Counter}>
        <CounterOutput />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add 5" />
        <CounterControl label="Subtract 5" />
      </div>
    );
  }
}

export default Counter;
