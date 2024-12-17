import React from 'react';
import styles from '../styles/ErrorComponent.module.css';

const ErrorComponent = ({ message }) => {
  return message ? <div className={styles.error}>{message}</div> : null;
};

export default ErrorComponent;
