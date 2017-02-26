// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate } from 'redux-persist';
import rootReducer from 'Reducers/';
import sagas from 'Sagas/';
import persistTransform from 'Utils/ImmutablePersistenceTransform';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const enhancers = [];

// createStore
export default () => {
  enhancers.push(applyMiddleware(...middleware));
  enhancers.push(autoRehydrate());

  // Store生成
  const store = createStore(rootReducer, compose(...enhancers));
  // state永続化設定
  persistTransform(store);

  // run sagas
  sagaMiddleware.run(sagas);

  return store;
};
