import React from 'react';
import styles from './Select.scss';

export default () => (
  <div className={styles.select}>
    <select aria-label="Select menu example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
);
