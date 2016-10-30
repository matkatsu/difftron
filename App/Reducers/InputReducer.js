import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import Types from '../Actions/Types';

export const INITIAL_STATE = immutable({
  left: '',
  right: '',
});

const changeLeft = (state, action) =>
  state.merge({
    left: action.input,
  });

const changeRight = (state, action) =>
  state.merge({
    right: action.input,
  });

// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [Types.INPUT_LEFT_CHANGE]: changeLeft,
  [Types.INPUT_RIGHT_CHANGE]: changeRight,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
