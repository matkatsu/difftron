import Types from './Types';

// 起動時設定
const startup = () => ({ type: Types.STARTUP });

// leftのstateを更新
const inputLeftChange = input => ({ type: Types.INPUT_LEFT_CHANGE, input });
// rightのstateを更新
const inputRightChange = input => ({ type: Types.INPUT_RIGHT_CHANGE, input });
// stateの更新が終わったらoutput出力
const outputDiffResult = () => ({ type: Types.OUTPUT_DIFF_RESULT });

/*
アプリ内で有効なActions一覧
*/
export default {
  startup,
  inputLeftChange,
  inputRightChange,
  outputDiffResult,
};
