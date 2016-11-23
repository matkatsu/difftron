import test from 'ava';
import { take, select, fork } from 'redux-saga/effects';
import { left, right } from '../../App/Selectors/Input';
import { format, split } from '../../App/Selectors/Output';
import Types from '../../App/Actions/Types';
import { leftWatcher, rightWatcher, formatWatcher, splitWatcher, worker } from '../../App/Sagas/InputSaga';

// 呼び出すたびにGeneratorのstepを1つ進める
const stepper = fn => mock => fn.next(mock).value;

test('leftWatcher step test', (t) => {
  const step = stepper(leftWatcher());
  // takeEveryのステップとworker起動のテスト
  t.deepEqual(step(), take(Types.INPUT_LEFT_CHANGE));
  t.deepEqual(step(), fork(worker, undefined));
  t.deepEqual(step(), take(Types.INPUT_LEFT_CHANGE));
});

test('rightWatcher step test', (t) => {
  const step = stepper(rightWatcher());
  t.deepEqual(step(), take(Types.INPUT_RIGHT_CHANGE));
  t.deepEqual(step(), fork(worker, undefined));
  t.deepEqual(step(), take(Types.INPUT_RIGHT_CHANGE));
});

test('formatWatcher step test', (t) => {
  const step = stepper(formatWatcher());
  t.deepEqual(step(), take(Types.OUTPUT_FORMAT_CHANGE));
  t.deepEqual(step(), fork(worker, undefined));
  t.deepEqual(step(), take(Types.OUTPUT_FORMAT_CHANGE));
});

test('splitWatcher step test', (t) => {
  const step = stepper(splitWatcher());
  t.deepEqual(step(), take(Types.OUTPUT_SPLIT_CHANGE));
  t.deepEqual(step(), fork(worker, undefined));
  t.deepEqual(step(), take(Types.OUTPUT_SPLIT_CHANGE));
});

test('worker step test', (t) => {
  const step = stepper(worker());
  t.deepEqual(step(), select(left));
  t.deepEqual(step(), select(right));
  t.deepEqual(step(), select(format));
  t.deepEqual(step(), select(split));
});
