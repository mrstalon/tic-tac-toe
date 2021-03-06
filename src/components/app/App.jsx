import React, { Component } from 'react';
import './App.css';
import GameField from '../game-field/GameField';

class App extends Component {
  state = {
    crossTurn: true,
    zeroTurn: false,
    turnText: 'Ходят крестики',
    isGameEnded: false,
    winner: null,
    isNewGameStarting: false,
  }

  changeTurn = (crossTurnLocal, zeroTurnLocal) => {
    this.setState(() => ({
      crossTurn: !crossTurnLocal,
      zeroTurn: !zeroTurnLocal,
      turnText: !crossTurnLocal ? 'Ходят крестики' : 'Ходят нолики',
    }));
  }

  endGame = (winner) => {
    this.setState((state) => {
      state.isGameEnded = true;
      state.winner = winner;
      return state;
    });
  }

  startNewGame = () => {
    this.setState(() => ({
      isNewGameStarting: true,
      isGameEnded: false,
      winner: null,
      crossTurn: true,
      zeroTurn: false,
      turnText: 'Ходят крестики',
    }));
  }

  newGameIsStarted = () => {
    this.setState(() => ({
      isNewGameStarting: false,
    }));
  }

  render() {
    let headerContent;

    if (this.state.isGameEnded) {
      headerContent = (
        <div className="game-is-over">
          <h1 className="App-title">Игра закончена, победили {this.state.winner}</h1>
          <button onClick={this.startNewGame}>Начать новую игру</button>
        </div>
      );
    } else {
      headerContent = (
        <h1 className="App-title">{this.state.turnText}</h1>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          {headerContent}
        </header>
        <GameField
          crossTurn={this.state.crossTurn}
          zeroTurn={this.state.zeroTurn}
          changeTurn={this.changeTurn}
          endGame={this.endGame}
          isGameEnded={this.state.isGameEnded}
          isNewGameStarting={this.state.isNewGameStarting}
          newGameIsStarted={this.newGameIsStarted}
        />
      </div>
    );
  }
}

export default App;
