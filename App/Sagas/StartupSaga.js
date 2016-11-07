import { take } from 'redux-saga/effects';
import Types from '../Actions/Types';

export default function* watcher() {
  yield take(Types.STARTUP);
  // マウント前に設定するものがあればここに記述
  console.log('startup');
}
