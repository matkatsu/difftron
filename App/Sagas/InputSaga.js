import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

function* worker() {
  yield put(Actions.outputDiffResult());
}

export default function* watcher() {
  yield* takeEvery(Types.INPUT_LEFT_CHANGE, worker);
}
