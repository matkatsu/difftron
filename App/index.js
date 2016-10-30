import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Stores/Store';
import PresentationScreen from './Containers/PresentationScreen';
import './index.global.css';

const store = configureStore();

// rootコンポーネントがstateless-functionだとHMRが動かないバグ
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <PresentationScreen />
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
