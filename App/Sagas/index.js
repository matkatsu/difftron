import { fork } from 'redux-saga/effects';
import startupSaga from './StartupSaga';
import { leftWatcher, rightWatcher } from './InputSaga';

// start the daemons
export default function* root() {
  yield fork(startupSaga);
  yield fork(leftWatcher);
  yield fork(rightWatcher);
}
