// @flow
import { createReducer } from 'reduxsauce';
import I from 'seamless-immutable';
import type { Immutable } from 'seamless-immutable';
import ActionTypes from '../Actions/Types';
import type { Input, A_INPUT_LEFT_CHANGE, A_INPUT_RIGHT_CHANGE, A_INPUT_LANGUAGE_CHANGE, A_INPUT_THEME_CHANGE } from '../Types';

// 入力State初期値
const initialState: Input = {
  left: '',
  right: '',
  language: 'javascript',
  theme: 'github',
};

export const INITIAL_STATE: Immutable<Input> = I.from(initialState);

const changeLeft = (state: Immutable<Input>, action: A_INPUT_LEFT_CHANGE) =>
  state.merge({
    left: action.input,
  });

const changeRight = (state: Immutable<Input>, action: A_INPUT_RIGHT_CHANGE) =>
  state.merge({
    right: action.input,
  });

const changeLanguage = (state: Immutable<Input>, action: A_INPUT_LANGUAGE_CHANGE) =>
  state.merge({
    language: action.language,
  });

const changeTheme = (state: Immutable<Input>, action: A_INPUT_THEME_CHANGE) =>
  state.merge({
    theme: action.theme,
  });

// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [ActionTypes.INPUT_LEFT_CHANGE]: changeLeft,
  [ActionTypes.INPUT_RIGHT_CHANGE]: changeRight,
  [ActionTypes.INPUT_LANGUAGE_CHANGE]: changeLanguage,
  [ActionTypes.INPUT_THEME_CHANGE]: changeTheme,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
