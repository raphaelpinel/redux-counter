import React from 'react';

import styles from './CounterControl.module.css';

const CounterControl = props => (
  <div className={styles.CounterControl} onClick={props.clicked}>
    {props.label}
  </div>
);

export default CounterControl;
