import React, { PropTypes } from 'react';
import AceEditor from 'react-ace';

const InputRight = ({ onChange, value, editorSettings }) => (
  <AceEditor
    mode={editorSettings.language}
    theme={editorSettings.theme}
    onChange={onChange}
    name="LEFT_INPUT"
    width="100%"
    height="100%"
    value={value}
    showPrintMargin={false}
    editorProps={{ $blockScrolling: true }}
  />
);

InputRight.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  editorSettings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }),
};

export default InputRight;
