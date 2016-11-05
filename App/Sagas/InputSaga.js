import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { createPatch } from 'diff';
import diff2html from 'diff2html';
import { left, right } from '../Selectors/Input';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

function* worker() {
  // 現在のstateを取得
  const leftInput = yield select(left);
  const rightInput = yield select(right);
  // diff計算
  const patch = createPatch('result', leftInput, rightInput, 'before', 'after');
  // diff2html
  const d2h = diff2html.Diff2Html;
  const htmlString = d2h.getPrettyHtml(patch);
  yield put(Actions.outputDiffResult(htmlString));
}

export function* leftWatcher() {
  yield* takeEvery(Types.INPUT_LEFT_CHANGE, worker);
}
export function* rightWatcher() {
  yield* takeEvery(Types.INPUT_RIGHT_CHANGE, worker);
}
