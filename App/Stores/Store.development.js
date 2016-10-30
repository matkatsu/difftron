import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/';

const middleware = [];
const enhancers = [];

// createStore
export default () => {
  enhancers.push(applyMiddleware(...middleware));

  // Store生成
  const store = createStore(rootReducer, compose(...enhancers));

  return store;
};
