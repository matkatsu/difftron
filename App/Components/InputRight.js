import React from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';
import styles from './Styles/InputRight.css';

const onChange = (newValue) => {
  console.log('change', newValue);
};

const InputRight = () => (
  <div className={styles.box}>
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      onChange={onChange}
      name="LEFT_INPUT"
      width="100%"
      height="100%"
      showPrintMargin={false}
    />
  </div>
);

export default InputRight;
