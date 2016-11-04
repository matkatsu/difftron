import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import Types from '../Actions/Types';

export const INITIAL_STATE = immutable({
  diff: '',
});

const outputResult = (state, action) => {
  state.merge({
    diff: action.diff,
  });
};

// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [Types.OUTPUT_DIFF_RESULT]: outputResult,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
