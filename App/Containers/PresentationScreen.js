// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import SplitPane from 'react-split-pane';
import InputLeft from 'Components/InputLeft';
import InputRight from 'Components/InputRight';
import DiffResult from 'Components/DiffResult';
import Actions from 'Actions/Creators';
import type { State, Left, Right, Language, Theme, Format, Split, Contents } from 'Types/State';
import type { Dispatch } from 'Types';

type Props = {
  changeLeft: (input: Left) => void,
  changeRight: (input: Right) => void,
  changeSplit: (event: any) => void,
  left: Left,
  right: Right,
  language: Language,
  theme: Theme,
  contents: Contents,
  format: Format,
  split: Split,
};

export const PresentationScreen = (props: Props) => (
  <SplitPane split="horizontal" defaultSize="60%">
    <SplitPane split="vertical" defaultSize="50%">
      <InputLeft
        onChange={(input: Left) => props.changeLeft(input)}
        value={props.left}
        editorSettings={{ language: props.language, theme: props.theme, format: props.format }}
      />
      <InputRight
        onChange={(input: Right) => props.changeRight(input)}
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

const mapStateToProps = (state: State) => (
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLeft: (input: Left) => {
    dispatch(Actions.inputLeftChange(input));
  },
  changeRight: (input: Right) => {
    dispatch(Actions.inputRightChange(input));
  },
  changeSplit: (event) => {
    dispatch(Actions.outputSplitChange(event.target.value));
  },
});

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(PresentationScreen);

