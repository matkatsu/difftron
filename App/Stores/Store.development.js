import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers/';
import sagas from '../Sagas/';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const enhancers = [];

// createStore
export default () => {
  enhancers.push(applyMiddleware(...middleware));

  // Store生成
  const store = createStore(rootReducer, compose(...enhancers));

  // run sagas
  sagaMiddleware.run(sagas);

  return store;
};
