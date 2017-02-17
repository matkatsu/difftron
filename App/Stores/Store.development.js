import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate } from 'redux-persist';
import rootReducer from '../Reducers/';
import sagas from '../Sagas/';
import persistTransform from '../Utils/ImmutablePersistenceTransform';
import Reactotron from '../Config/Reactotron';

const middleware = [];
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

const enhancers = [];

// createStore
export default () => {
  enhancers.push(applyMiddleware(...middleware));
  enhancers.push(autoRehydrate());

  // Store生成
  const store = Reactotron.createStore(rootReducer, compose(...enhancers));
  // state永続化設定
  persistTransform(store);

  // run sagas
  sagaMiddleware.run(sagas);

  return store;
};
