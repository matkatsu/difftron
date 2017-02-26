import test from 'ava';
import { select } from 'redux-saga/effects';
import { left, right } from 'Selectors/Input';
import { format, split } from 'Selectors/Output';
import { worker } from 'Sagas/InputSaga';

// 呼び出すたびにGeneratorのstepを1つ進める
const stepper = fn => mock => fn.next(mock).value;

test('worker step test', (t) => {
  const step = stepper(worker());
  t.deepEqual(step(), select(left));
  t.deepEqual(step(), select(right));
  t.deepEqual(step(), select(format));
  t.deepEqual(step(), select(split));
});
