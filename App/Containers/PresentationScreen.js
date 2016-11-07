import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';
import InputLeft from '../Components/InputLeft';
import InputRight from '../Components/InputRight';
import DiffResult from '../Components/DiffResult';
import Actions from '../Actions/Creators';

const PresentationScreen = props => (
  <SplitPane split="horizontal" defaultSize="60%">
    <SplitPane split="vertical" defaultSize="50%">
      <InputLeft
        onChange={input => props.changeLeft(input)}
        value={props.left}
        editorSettings={{ language: props.language, theme: props.theme, format: props.format }}
      />
      <InputRight
        onChange={input => props.changeRight(input)}
        value={props.right}
        editorSettings={{ language: props.language, theme: props.theme, format: props.format }}
      />
    </SplitPane>
    <DiffResult
      value={props.contents}
      editorSettings={{
        language: props.language,
        theme: props.theme,
        format: props.format,
        split: props.split,
      }}
      handleSplitChange={e => props.changeSplit(e)}
    />
  </SplitPane>
);

PresentationScreen.propTypes = {
  changeLeft: PropTypes.func.isRequired,
  changeRight: PropTypes.func.isRequired,
  changeSplit: PropTypes.func.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  contents: PropTypes.string,
  format: PropTypes.string.isRequired,
  split: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    left: state.input.left,
    right: state.input.right,
    language: state.input.language,
    theme: state.input.theme,
    contents: state.output.contents,
    format: state.output.format,
    split: state.output.split,
  }
);

const mapDispatchToProps = dispatch => (
  {
    changeLeft: input => dispatch(Actions.inputLeftChange(input)),
    changeRight: input => dispatch(Actions.inputRightChange(input)),
    changeSplit: event => dispatch(Actions.outputSplitChange(event.target.value)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen);
