// @flow
import React from 'react';
import AceEditor from 'react-ace';
import '../diff2html.global.css';
import styles from './Styles/DiffResult.css';
import DIFF_FORMAT from '../Config/DiffFormat';
import type { Contents, InputLanguage, InputTheme, OutputFormat, OutputSplit } from '../Types';

type EditorSettings = {
  format: OutputFormat,
  split: OutputSplit,
  language: InputLanguage,
  theme: InputTheme,
}

type Props = {
  value: Contents,
  editorSettings: EditorSettings,
  handleSplitChange: (split: OutputSplit) => void
};

const lineByLine: OutputSplit = 'line-by-line';
const sideBySide: OutputSplit = 'side-by-side';

const DiffResult = ({ value, editorSettings, handleSplitChange }: Props) => {
  let component;
  if (editorSettings.format === DIFF_FORMAT.html) {
    component = (
      <div>
        <div className={styles.splitFormArea}>
          <select value={editorSettings.split} onChange={handleSplitChange}>
            <option value={lineByLine}>Line by Line</option>
            <option value={sideBySide}>Side by Side</option>
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

export default DiffResult;
