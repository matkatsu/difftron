// @flow
import React from 'react';
import AceEditor from 'react-ace';
import type { Right, InputLanguage, InputTheme } from '../Types';

type EditorSettings = {
  language: InputLanguage,
  theme: InputTheme,
};

type Props = {
  onChange: (input: Right) => void,
  value: Right,
  editorSettings: EditorSettings,
};

const InputRight = ({ onChange, value, editorSettings }: Props) => (
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

export default InputRight;
