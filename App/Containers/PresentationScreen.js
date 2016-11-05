import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';
import InputLeft from '../Components/InputLeft';
import InputRight from '../Components/InputRight';
import DiffResult from '../Components/DiffResult';
import Actions from '../Actions/Creators';

const PresentationScreen = ({ changeLeft, changeRight, left, right, diff }) => (
  <SplitPane split="horizontal" defaultSize="60%">
    <SplitPane split="vertical" defaultSize="50%">
      <InputLeft onChange={input => changeLeft(input)} value={left} />
      <InputRight onChange={input => changeRight(input)} value={right} />
    </SplitPane>
    <DiffResult value={diff} />
  </SplitPane>
);

PresentationScreen.propTypes = {
  changeLeft: PropTypes.func,
  changeRight: PropTypes.func,
  left: PropTypes.string,
  right: PropTypes.string,
  diff: PropTypes.string,
};

const mapStateToProps = state => (
  {
    left: state.input.left,
    right: state.input.right,
    diff: state.output.diff,
  }
);

const mapDispatchToProps = dispatch => (
  {
    changeLeft: input => dispatch(Actions.inputLeftChange(input)),
    changeRight: input => dispatch(Actions.inputRightChange(input)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen);
