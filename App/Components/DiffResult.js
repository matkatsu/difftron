import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/theme/solarized_light';
import 'brace/theme/github';
import AceEditor from 'react-ace';
import '../diff2html.global.css';

const DiffResult = ({ value, editorSettings }) => {
  let component;
  if (editorSettings.format === 'html') {
    component = <div dangerouslySetInnerHTML={{ __html: value }} />;
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
    format: PropTypes.string.isRequired,
  }),
};

export default DiffResult;
