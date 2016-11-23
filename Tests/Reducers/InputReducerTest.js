import test from 'ava';
import reducer, { INITIAL_STATE } from '../../App/Reducers/InputReducer';
import Actions from '../../App/Actions/Creators';

test('changeLeft', (t) => {
  const input = 'New Text';
  const state = reducer(INITIAL_STATE, Actions.inputLeftChange(input));
  t.is(state.left, input);
  t.is(state.right, INITIAL_STATE.right);
  t.is(state.language, INITIAL_STATE.language);
  t.is(state.theme, INITIAL_STATE.theme);
});

test('changeRight', (t) => {
  const input = 'New Text';
  const state = reducer(INITIAL_STATE, Actions.inputRightChange(input));
  t.is(state.left, INITIAL_STATE.left);
  t.is(state.right, input);
  t.is(state.language, INITIAL_STATE.language);
  t.is(state.theme, INITIAL_STATE.theme);
});

test('changeLanguage', (t) => {
  const language = 'java';
  const state = reducer(INITIAL_STATE, Actions.inputLanguageChange(language));
  t.is(state.left, INITIAL_STATE.left);
  t.is(state.right, INITIAL_STATE.right);
  t.is(state.language, language);
  t.is(state.theme, INITIAL_STATE.theme);
});

test('changeTheme', (t) => {
  const theme = 'monokai';
  const state = reducer(INITIAL_STATE, Actions.inputThemeChange(theme));
  t.is(state.left, INITIAL_STATE.left);
  t.is(state.right, INITIAL_STATE.right);
  t.is(state.language, INITIAL_STATE.language);
  t.is(state.theme, theme);
});
