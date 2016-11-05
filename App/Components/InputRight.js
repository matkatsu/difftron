import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';

const InputRight = ({ onChange, value }) => (
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
);

InputRight.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputRight;
