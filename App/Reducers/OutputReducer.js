// @flow
import { createReducer } from 'reduxsauce';
import I from 'seamless-immutable';
import type { Immutable } from 'seamless-immutable';
import ActionTypes from '../Actions/Types';
import type { Output, A_OUTPUT_DIFF_RESULT, A_OUTPUT_FORMAT_CHANGE, A_OUTPUT_SPLIT_CHANGE } from '../Types';
import DIFF_FORMAT from '../Config/DiffFormat';

// 入力State初期値
const initialState: Output = {
  raw: '',
  contents: '',
  format: DIFF_FORMAT.html,
  split: 'line-by-line',
};

export const INITIAL_STATE = I.from(initialState);

const outputResult = (state: Immutable<Output>, action: A_OUTPUT_DIFF_RESULT) =>
  state.merge({
    raw: action.raw,
    contents: action.contents,
  });

const changeFormat = (state: Immutable<Output>, action: A_OUTPUT_FORMAT_CHANGE) =>
  state.merge({
    format: action.format,
  });

const changeSplit = (state: Immutable<Output>, action: A_OUTPUT_SPLIT_CHANGE) =>
  state.merge({
    split: action.split,
  });

// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [ActionTypes.OUTPUT_DIFF_RESULT]: outputResult,
  [ActionTypes.OUTPUT_FORMAT_CHANGE]: changeFormat,
  [ActionTypes.OUTPUT_SPLIT_CHANGE]: changeSplit,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
