import React, { PropTypes } from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import AceEditor from 'react-ace';
import '../diff2html.global.css';

const DiffResult = ({ value }) => (
  // <div dangerouslySetInnerHTML={{ __html: value }}></div>
  <AceEditor
    mode="javascript"
    theme="solarized_light"
    name="DIFF_RESULT"
    width="100%"
    height="100%"
    value={value}
    showPrintMargin={false}
    showGutter={false}
    editorProps={{ $blockScrolling: true }}
  />
);

DiffResult.propTypes = {
  value: PropTypes.string,
};

export default DiffResult;
