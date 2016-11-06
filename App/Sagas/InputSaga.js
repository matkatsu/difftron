import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { createPatch } from 'diff';
import diff2html from 'diff2html';
import { left, right } from '../Selectors/Input';
import { format, split } from '../Selectors/Output';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

function* worker() {
  // 現在のstateを取得
  const leftInput = yield select(left);
  const rightInput = yield select(right);
  // diff計算
  const rawDiff = createPatch('result', leftInput, rightInput, 'before', 'after');

  let contents = '';
  const outputFormat = yield select(format);
  const outputSplit = yield select(split);

  if (outputFormat === 'unified') {
    contents = rawDiff;
  } else {
    // diff2html
    const d2h = diff2html.Diff2Html;
    const htmlString = d2h.getPrettyHtml(rawDiff, { outputFormat: outputSplit });
    contents = htmlString;
  }
  yield put(Actions.outputDiffResult(rawDiff, contents));
}

export function* leftWatcher() {
  yield* takeEvery(Types.INPUT_LEFT_CHANGE, worker);
}
export function* rightWatcher() {
  yield* takeEvery(Types.INPUT_RIGHT_CHANGE, worker);
}
export function* formatWatcher() {
  yield* takeEvery(Types.OUTPUT_FORMAT_CHANGE, worker);
}
