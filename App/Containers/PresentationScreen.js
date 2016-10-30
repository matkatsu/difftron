import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import InputLeft from '../Components/InputLeft';
import InputRight from '../Components/InputRight';
import DiffResult from '../Components/DiffResult';
import styles from './Styles/PresentationScreen.css';
import Actions from '../Actions/Creators';

const handleChangeInput = (change, input) => {
  change(input);
};

const PresentationScreen = ({ changeLeft, changeRight }) => (
  <div className={styles.container}>
    <div className={styles.inputWrapper}>
      <InputLeft onChange={input => handleChangeInput(changeLeft, input)} />
      <InputRight onChange={input => handleChangeInput(changeRight, input)} />
    </div>
    <div className={styles.outputWrapper}>
      <DiffResult />
    </div>
  </div>
);

PresentationScreen.propTypes = {
  changeLeft: PropTypes.func,
  changeRight: PropTypes.func,
};

const mapStateToProps = () => ({});

// dispatchは基本的にpropsで渡す
const mapDispatchToProps = dispatch => (
  {
    changeLeft: input => dispatch(Actions.inputLeftChange(input)),
    changeRight: input => dispatch(Actions.inputRightChange(input)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen);
