import { fork } from 'redux-saga/effects';
import startupSaga from './StartupSaga';
import * as input from './InputSaga';

// start the daemons
export default function* root() {
  yield fork(startupSaga);
  yield fork(input.leftWatcher);
  yield fork(input.rightWatcher);
  yield fork(input.formatWatcher);
  yield fork(input.splitWatcher);
}
