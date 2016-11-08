import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import Types from '../Actions/Types';
import DIFF_FORMAT from '../Config/DiffFormat';

export const INITIAL_STATE = immutable({
  raw: '',
  contents: '',
  format: DIFF_FORMAT.html,
  split: 'side-by-side',
});

const outputResult = (state, action) =>
  state.merge({
    raw: action.diff,
    contents: action.contents,
  });

const changeFormat = (state, action) =>
  state.merge({
    format: action.format,
  });

const changeSplit = (state, action) =>
  state.merge({
    split: action.split,
  });

// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [Types.OUTPUT_DIFF_RESULT]: outputResult,
  [Types.OUTPUT_FORMAT_CHANGE]: changeFormat,
  [Types.OUTPUT_SPLIT_CHANGE]: changeSplit,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
