// @flow
import React from 'react';
import AceEditor from 'react-ace';
import type { Right, Language, Theme } from 'Types/State';

type EditorSettings = {
  language: Language,
  theme: Theme,
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
    name="RIGHT_INPUT"
    width="100%"
    height="100%"
    value={value}
    showPrintMargin={false}
    editorProps={{ $blockScrolling: true }}
  />
);

export default InputRight;
