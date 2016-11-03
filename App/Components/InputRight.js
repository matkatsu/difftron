import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';
import styles from './Styles/InputRight.css';

const InputRight = ({ onChange, value }) => (
  <div className={styles.box}>
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      onChange={onChange}
      name="LEFT_INPUT"
      width="100%"
      height="100%"
      value={value}
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
    />
  </div>
);

InputRight.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputRight;
