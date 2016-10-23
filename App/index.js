import React, { Component } from 'react';
import { render } from 'react-dom';


// rootコンポーネントがstateless-functionだとHMRが動かないバグ
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md

// const App = () => (
//   <div>
//     test
//   </div>
// );

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
