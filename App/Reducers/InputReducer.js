import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import Types from '../Actions/Types';

export const INITIAL_STATE = immutable({
  left: '',
  right: '',
  language: 'javascript',
  theme: 'solarized_light',
});

const changeLeft = (state, action) =>
  state.merge({
    left: action.input,
  });

const changeRight = (state, action) =>
  state.merge({
    right: action.input,
  });

const changeLanguage = (state, action) =>
  state.merge({
    language: action.language,
  });

const changeTheme = (state, action) =>
  state.merge({
    theme: action.theme,
  });


// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [Types.INPUT_LEFT_CHANGE]: changeLeft,
  [Types.INPUT_RIGHT_CHANGE]: changeRight,
  [Types.INPUT_LANGUAGE_CHANGE]: changeLanguage,
  [Types.INPUT_THEME_CHANGE]: changeTheme,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
