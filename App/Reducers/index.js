import { combineReducers } from 'redux';
import InputReducer from './InputReducer';

// 全Reducerをまとめる
export default combineReducers({
  input: InputReducer,
});
