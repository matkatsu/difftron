// @flow
import { combineReducers } from 'redux';
import InputReducer from './InputReducer';
import OutputReducer from './OutputReducer';

// 全Reducerをまとめる
export default combineReducers({
  input: InputReducer,
  output: OutputReducer,
});
