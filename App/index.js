// @flow
import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Stores/Store';
import PresentationScreen from './Containers/PresentationScreen';
import Actions from './Actions/Creators';
import './index.global.css';

const store = configureStore();

class App extends Component {

  componentWillMount() {
    const { dispatch } = store;

    // ipcイベントリスナ
    ipcRenderer.on('set-language', (event, arg) => {
      dispatch(Actions.inputLanguageChange(arg));
    });
    ipcRenderer.on('set-theme', (event, arg) => {
      dispatch(Actions.inputThemeChange(arg));
    });
    ipcRenderer.on('set-diff-format', (event, arg) => {
      dispatch(Actions.outputFormatChange(arg));
    });

    // 初期設定アクション
    dispatch(Actions.startup());
  }

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
  document.getElementById('app'),
);
