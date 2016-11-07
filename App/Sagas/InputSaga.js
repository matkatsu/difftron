import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { left, right } from '../Selectors/Input';
import { format, split } from '../Selectors/Output';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import createDiff from '../Services/CalculateDiff';

function* worker() {
  // 現在のstateを取得
  const leftInput = yield select(left);
  const rightInput = yield select(right);
  const outputFormat = yield select(format);
  const outputSplit = yield select(split);
  const [rawDiff, contents] = createDiff(leftInput, rightInput, outputFormat, outputSplit);
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
export function* splitWatcher() {
  yield* takeEvery(Types.OUTPUT_SPLIT_CHANGE, worker);
}
