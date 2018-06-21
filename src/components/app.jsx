import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render(){
    return (
      <div>
        <Greeting name="Bob" />
        <Greeting name="john" />
      </div>
    );
  }
}

export default App;
