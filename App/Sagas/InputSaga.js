import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { createPatch } from 'diff';
import { left, right } from '../Selectors/Input';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

function* worker() {
  // 現在のstateを取得
  const leftInput = yield select(left);
  const rightInput = yield select(right);
  // diff計算
  const patch = createPatch('result', leftInput, rightInput, 'left text', 'right text');
  yield put(Actions.outputDiffResult(patch));
}

export function* leftWatcher() {
  yield* takeEvery(Types.INPUT_LEFT_CHANGE, worker);
}
export function* rightWatcher() {
  yield* takeEvery(Types.INPUT_RIGHT_CHANGE, worker);
}
