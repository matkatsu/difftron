import { take, put } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

// 起動時設定
export default function* watcher() {
  yield take(Types.STARTUP);
  console.log('startup');
}
