// @flow
import type { Left, Right, InputLanguage, InputTheme, Raw, Contents, OutputFormat, OutputSplit, Action } from 'Types';

// 起動時設定
const startup = (): Action => ({ type: 'STARTUP' });

// leftのstateを更新
const inputLeftChange = (input: Left): Action => ({ type: 'INPUT_LEFT_CHANGE', input });
// rightのstateを更新
const inputRightChange = (input: Right): Action => ({ type: 'INPUT_RIGHT_CHANGE', input });
// エディタ言語設定変更
const inputLanguageChange = (language: InputLanguage): Action =>
  ({ type: 'INPUT_LANGUAGE_CHANGE', language });
// エディタテーマ設定変更
const inputThemeChange = (theme: InputTheme): Action => ({ type: 'INPUT_THEME_CHANGE', theme });

// diff出力
const outputDiffResult = (raw: Raw, contents: Contents): Action =>
  ({ type: 'OUTPUT_DIFF_RESULT', raw, contents });
// diffフォーマット形式変更
const outputFormatChange = (format: OutputFormat): Action =>
  ({ type: 'OUTPUT_FORMAT_CHANGE', format });
// diff表示形式変更
const outputSplitChange = (split: OutputSplit): Action =>
  ({ type: 'OUTPUT_SPLIT_CHANGE', split });

/*
アプリ内で有効なActions一覧
*/
export default {
  startup,
  inputLeftChange,
  inputRightChange,
  inputLanguageChange,
  inputThemeChange,
  outputDiffResult,
  outputFormatChange,
  outputSplitChange,
};
