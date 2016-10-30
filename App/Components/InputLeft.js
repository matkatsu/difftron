import React, { PropTypes } from 'react';
import brace from 'brace';
import * as jsdiff from 'diff';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';
import styles from './Styles/InputLeft.css';

const InputLeft = props => (
  <div className={styles.box}>
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      onChange={props.onChange}
      name="RIGHT_INPUT"
      width="100%"
      height="100%"
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
    />
  </div>
);

InputLeft.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputLeft;
