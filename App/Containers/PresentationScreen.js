import React from 'react';
import InputLeft from '../Components/InputLeft';
import InputRight from '../Components/InputRight';
import DiffResult from '../Components/DiffResult';
import styles from './Styles/PresentationScreen.css';

const PresentationScreen = () => (
  <div className={styles.flexbox}>
    <div className={styles.inputContainer}>
      <InputLeft />
      <InputRight />
    </div>
    <div className={styles.outputContainer}>
      <DiffResult />
    </div>
  </div>
);

export default PresentationScreen;
