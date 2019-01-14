import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './StoreResult.module.css';

const StoreResult = props => (
  <div className={styles.StoreResult}>
    <button onClick={props.onStoreResult}>Store Result</button>
    <ul>
      {props.storedResults.map(strRes => (
        <li key={strRes.id}>
          <span>
            <FontAwesomeIcon icon="trash-alt" />
          </span>
          {strRes.value}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreResult);
