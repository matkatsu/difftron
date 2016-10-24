import React, { Component } from 'react';
import { render } from 'react-dom';
import PresentationScreen from './Containers/PresentationScreen';

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
  <App />,
  document.getElementById('app')
);
