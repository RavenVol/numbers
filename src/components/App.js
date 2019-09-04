import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from './Intro';
import GameField from './GameField';

import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstTime: true,
    }
  }

  setFirstTime = (firstTime) => {
    this.setState({firstTime});
  }

  render() {
    return (
      <div className="App">
        {this.state.firstTime && <Intro setFirstTime={this.setFirstTime}/>}
        {!this.state.firstTime && <GameField />}
      </div>
    )
  }
}

export default App;
