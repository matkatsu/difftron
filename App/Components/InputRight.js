import React from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import AceEditor from 'react-ace';
import styles from './Styles/InputRight.css';

const onChange = (newValue) => {
  console.log('change', newValue);
};

const InputRight = () => (
  <div className={styles.box}>
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name="LEFT_INPUT"
      editorProps={{ $blockScrolling: true }}
    />
  </div>
);

export default InputRight;
