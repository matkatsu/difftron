import { fork } from 'redux-saga/effects';
import startupSaga from './StartupSaga';
import inputSaga from './InputSaga';

// start the daemons
export default function* root() {
  yield fork(startupSaga);
  yield fork(inputSaga);
}
