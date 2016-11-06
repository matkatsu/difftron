import Types from './Types';

// 起動時設定
const startup = () => ({ type: Types.STARTUP });

// leftのstateを更新
const inputLeftChange = input => ({ type: Types.INPUT_LEFT_CHANGE, input });
// rightのstateを更新
const inputRightChange = input => ({ type: Types.INPUT_RIGHT_CHANGE, input });
// エディタ言語設定変更
const inputLanguageChange = language => ({ type: Types.INPUT_LANGUAGE_CHANGE, language });
// エディタテーマ設定変更
const inputThemeChange = theme => ({ type: Types.INPUT_THEME_CHANGE, theme });

// diff出力
const outputDiffResult = (raw, contents) => ({ type: Types.OUTPUT_DIFF_RESULT, raw, contents });
// diffフォーマット形式変更
const outputFormatChange = format => ({ type: Types.OUTPUT_FORMAT_CHANGE, format });
// diff表示形式変更
const outputSplitChange = split => ({ type: Types.OUTPUT_SPLIT_CHANGE, split });

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
