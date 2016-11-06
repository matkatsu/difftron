import { take, put } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

export default function* watcher() {
  yield take(Types.STARTUP);
  console.log('startup');
}
