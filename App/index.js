import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
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
)
