import Types from './Types';

// 起動時設定
const startup = () => ({ type: Types.STARTUP });

// leftのstateを更新
const inputLeftChange = input => ({ type: Types.INPUT_LEFT_CHANGE, input });
// rightのstateを更新
const inputRightChange = input => ({ type: Types.INPUT_RIGHT_CHANGE, input });
// diff出力
const outputDiffResult = diff => ({ type: Types.OUTPUT_DIFF_RESULT, diff });

/*
アプリ内で有効なActions一覧
*/
export default {
  startup,
  inputLeftChange,
  inputRightChange,
  outputDiffResult,
};
