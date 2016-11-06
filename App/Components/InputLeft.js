import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/theme/solarized_light';
import 'brace/theme/github';
import AceEditor from 'react-ace';

const InputLeft = ({ onChange, value, editorSettings }) => (
  <AceEditor
    mode={editorSettings.language}
    theme={editorSettings.theme}
    onChange={onChange}
    name="RIGHT_INPUT"
    width="100%"
    height="100%"
    value={value}
    showPrintMargin={false}
    editorProps={{ $blockScrolling: true }}
  />
);

InputLeft.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  editorSettings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }),
};

export default InputLeft;
