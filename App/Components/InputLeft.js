// @flow
import React from 'react';
import AceEditor from 'react-ace';
import type { Left, Language, Theme } from 'Types/State';

type EditorSettings = {
  language: Language,
  theme: Theme,
};

type Props = {
  onChange: (input: Left) => void,
  value: Left,
  editorSettings: EditorSettings,
};

const InputLeft = ({ onChange, value, editorSettings }: Props) => (
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

export default InputLeft;
