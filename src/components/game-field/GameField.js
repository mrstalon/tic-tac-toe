import React, { Component } from 'react';
import './index.css';
import Square from '../game-square/Square.js';

class GameField extends Component {
    state = {
        gameSquares: [
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
            {
                isCrossPutted: false,
                isZeroPutted: false,
                value: null,
            },
        ],
    }

    putCrossOrZero = this.putCrossOrZero.bind(this);
    isGameEnded = this.isGameEnded.bind(this);

    componentWillUpdate() {
        // when isNewGameStarting changing at parent
        // it should lead to gameSquare array updating
        // but if we remove setTimeout, isNewGameStarting won't update instantly here in props
        setTimeout(() => {
            if (this.props.isNewGameStarting) {
                this.setState((state) => ({
                        gameSquares: state.gameSquares.map((square) => {
                            return {
                                value: null,
                                isCrossPutted: false,
                                isZeroPutted: false,
                            };
                        }),
                }));
                this.props.newGameIsStarted();
            }
        }, 0);
    }

    putCrossOrZero(id) {
        if (this.props.isGameEnded) {
            return;
        }

        if (this.state.gameSquares[id].isCrossPutted || this.state.gameSquares[id].isZeroPutted) {
            return;
        }

        let gameSquaresCopy = JSON.parse(JSON.stringify(this.state.gameSquares));
        if (this.props.crossTurn) {
            gameSquaresCopy[id].isCrossPutted = true;
            gameSquaresCopy[id].value = 'x';

            this.setState(() => ({
                gameSquares: gameSquaresCopy,
            }));

            if (this.isGameEnded('x', gameSquaresCopy)) {
                this.props.endGame('крестики');
            }
        } else if (this.props.zeroTurn) {
            gameSquaresCopy[id].isZeroPutted = true;
            gameSquaresCopy[id].value = 'о';

            this.setState(() => ({
                gameSquares: gameSquaresCopy,
            }));

            if (this.isGameEnded('о', gameSquaresCopy)) {
                this.props.endGame('нолики');
            }
        }
        this.props.changeTurn(this.props.crossTurn, this.props.zeroTurn);
    }
    isGameEnded(symbol, gameField) {
        const field = [[], [], []];
        gameField.slice().forEach((cell, index) => {
            if (index < 3) {
                field[0].push(cell.value);
            } else if (index < 6) {
                field[1].push(cell.value);
            } else {
                field[2].push(cell.value);
            }
        });

        if (field[0][0] === symbol && field[0][1] === symbol && field[0][2] === symbol) {
            return true;
        } else if (field[1][0] === symbol && field[1][1] === symbol && field[1][2] === symbol) {
            return true;
        } else if (field[2][0] === symbol && field[2][1] === symbol && field[2][2] === symbol) {
            return true;
        } else if (field[0][0] === symbol && field[1][0] === symbol && field[2][0] === symbol) {
            return true;
        } else if (field[0][1] === symbol && field[1][1] === symbol && field[2][1] === symbol) {
            return true;
        } else if (field[0][2] === symbol && field[1][2] === symbol && field[2][2] === symbol) {
            return true;
        } else if (field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol) {
            return true;
        } else if (field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol) {
            return true;
        }
        else {
            return false;
        }
    }
    render() {
        return (
            <div className="game-field">
                <div className="field-row">
                    <Square handleClick={() => this.putCrossOrZero(0)} isCrossPutted={this.state.gameSquares[0].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[0].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(1)} isCrossPutted={this.state.gameSquares[1].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[1].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(2)} isCrossPutted={this.state.gameSquares[2].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[2].isZeroPutted}/>
                </div>
                <div className="field-row">
                    <Square handleClick={() => this.putCrossOrZero(3)} isCrossPutted={this.state.gameSquares[3].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[3].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(4)} isCrossPutted={this.state.gameSquares[4].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[4].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(5)} isCrossPutted={this.state.gameSquares[5].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[5].isZeroPutted}/>
                </div>
                <div className="field-row">
                    <Square handleClick={() => this.putCrossOrZero(6)} isCrossPutted={this.state.gameSquares[6].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[6].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(7)} isCrossPutted={this.state.gameSquares[7].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[7].isZeroPutted}/>
                    <Square handleClick={() => this.putCrossOrZero(8)} isCrossPutted={this.state.gameSquares[8].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[8].isZeroPutted}/>
                </div>
            </div>
        )
    }
}

export default GameField;