import React from 'react';
import InputLeft from '../Components/InputLeft';
import InputRight from '../Components/InputRight';
import DiffResult from '../Components/DiffResult';
import styles from './Styles/PresentationScreen.css';

const PresentationScreen = () => (
  <div className={styles.container}>
    <div className={styles.inputWrapper}>
      <InputLeft />
      <InputRight />
    </div>
    <div className={styles.outputWrapper}>
      <DiffResult />
    </div>
  </div>
);

export default PresentationScreen;
