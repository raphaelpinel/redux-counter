import React from 'react';

import styles from './CounterOuptut.module.css';

const CounterOutput = props => (
  <div className={styles.CounterOutput}>current Counter: {props.value}</div>
);

export default CounterOutput;
