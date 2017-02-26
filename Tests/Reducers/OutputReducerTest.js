import test from 'ava';
import reducer, { INITIAL_STATE } from 'Reducers/OutputReducer';
import Actions from 'Actions/Creators';

test('outputResult', (t) => {
  const raw = 'raw output';
  const contents = '<html>contents</html>';
  const state = reducer(INITIAL_STATE, Actions.outputDiffResult(raw, contents));
  t.is(state.raw, raw);
  t.is(state.contents, contents);
  t.is(state.format, INITIAL_STATE.format);
  t.is(state.split, INITIAL_STATE.split);
});

test('changeFormat', (t) => {
  const format = 0;
  const state = reducer(INITIAL_STATE, Actions.outputFormatChange(format));
  t.is(state.raw, INITIAL_STATE.raw);
  t.is(state.contents, INITIAL_STATE.contents);
  t.is(state.format, format);
  t.is(state.split, INITIAL_STATE.split);
});

test('changeSplit', (t) => {
  const split = 'side-by-side';
  const state = reducer(INITIAL_STATE, Actions.outputSplitChange(split));
  t.is(state.raw, INITIAL_STATE.raw);
  t.is(state.contents, INITIAL_STATE.contents);
  t.is(state.format, INITIAL_STATE.format);
  t.is(state.split, split);
});
