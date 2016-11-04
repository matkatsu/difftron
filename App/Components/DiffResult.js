import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';
import styles from './Styles/DiffResult.css';

const DiffResult = ({ value }) => (
  <div className={styles.box}>
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      name="DIFF_RESULT"
      width="100%"
      height="300px"
      value={value}
      showPrintMargin={false}
    />
  </div>
);

DiffResult.propTypes = {
  value: PropTypes.string,
};

export default DiffResult;
