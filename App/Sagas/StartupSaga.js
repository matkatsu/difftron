import brace from 'brace'; // eslint-disable-line no-unused-vars
import { take } from 'redux-saga/effects';
import Types from '../Actions/Types';
import LANGUAGES from '../Config/Language';
import THEMES from '../Config/Theme';

export default function* watcher() {
  yield take(Types.STARTUP);
  // マウント前に設定するものがあればここに記述
  console.log('startup');

  /* eslint-disable global-require */
  /* eslint-disable import/no-dynamic-require */
  for (const lang of LANGUAGES) {
    require(`brace/mode/${lang}`);
  }
  for (const theme of THEMES) {
    require(`brace/theme/${theme}`);
  }
}
