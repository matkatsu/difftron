import React, { PropTypes } from 'react';
import AceEditor from 'react-ace';
import '../diff2html.global.css';
import styles from './Styles/DiffResult.css';
import DIFF_FORMAT from '../Config/DiffFormat';

const DiffResult = ({ value, editorSettings, handleSplitChange }) => {
  let component;
  if (editorSettings.format === DIFF_FORMAT.html) {
    component = (
      <div>
        <div className={styles.splitFormArea}>
          <select value={editorSettings.split} onChange={handleSplitChange}>
            <option value="line-by-line">Line by Line</option>
            <option value="side-by-side">Side by Side</option>
          </select>
        </div>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    );
  } else {
    component = (
      <AceEditor
        mode={editorSettings.language}
        theme={editorSettings.theme}
        name="DIFF_RESULT"
        width="100%"
        height="100%"
        value={value}
        showPrintMargin={false}
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
  return component;
};

DiffResult.propTypes = {
  value: PropTypes.string,
  editorSettings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    format: PropTypes.number.isRequired,
    split: PropTypes.string.isRequired,
  }),
  handleSplitChange: PropTypes.func.isRequired,
};

export default DiffResult;
