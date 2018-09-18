import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameField from '../game-field/GameField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crossTurn: true,
      zeroTurn: false,
    }
    this.changeTurn = this.changeTurn.bind(this);
  }

  changeTurn(crossTurn, zeroTurn) {
    console.log(1111);
    this.state.crossTurn = !crossTurn;
    this.state.zeroTurn = !zeroTurn;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GameField crossTurn={this.crossTurn} zeroTurn={this.zeroTurn} changeTurn={this.changeTurn} />
      </div>
    );
  }
}

export default App;
