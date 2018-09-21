import React, { Component } from 'react';
import './index.css';
import Square from '../game-square/Square';
import PropTypes from 'prop-types';
import isZeroPutted from '../../helpers/isZeroPutted';
import isCrossPutted from '../../helpers/isCrossPutted';

class GameField extends Component {
    state = {
        gameSquares: new Array(9).fill({
            value: null,
        }),
    }

    componentDidUpdate() {
        if (this.props.isNewGameStarting) {
            this.setState((state) => ({
                    gameSquares: state.gameSquares.map((square) => {
                        return {
                            value: null,
                        };
                    }),
            }));
            this.props.newGameIsStarted();
        }
    }

    putCrossOrZero = (id) => {
        const { isGameEnded, crossTurn, endGame, changeTurn, zeroTurn } = this.props;
        const { gameSquares } = this.state;
        if (isGameEnded) {
            return;
        }

        if (isCrossPutted(gameSquares, id) || isZeroPutted(gameSquares, id)) {
            return;
        }

        let gameSquaresCopy = JSON.parse(JSON.stringify(this.state.gameSquares));
        if (crossTurn) {
            gameSquaresCopy[id].value = 'x';

            this.setState(() => ({
                gameSquares: gameSquaresCopy,
            }));

            if (this.checkIsGameEnded('x', gameSquaresCopy)) {
                endGame('крестики');
            }
        } else if (zeroTurn) {
            gameSquaresCopy[id].value = 'о';

            this.setState(() => ({
                gameSquares: gameSquaresCopy,
            }));

            if (this.checkIsGameEnded('о', gameSquaresCopy)) {
                endGame('нолики');
            }
        }
        changeTurn(crossTurn, zeroTurn);
    }
    checkIsGameEnded = (symbol, gameField) => {
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
                {this.state.gameSquares.map((square, index) => {
                    return (
                        <Square
                            handleClick={() => this.putCrossOrZero(index)}
                            isCrossPutted={isCrossPutted(this.state.gameSquares, index)}
                            isZeroPutted={isZeroPutted(this.state.gameSquares, index)}
                            key={index}
                        />
                    );
                })}
            </div>
        )
    }
}

GameField.propTypes = {
    crossTurn: PropTypes.bool,
    zeroTurn: PropTypes.bool,
    changeTurn: PropTypes.func,
    endGame: PropTypes.func,
    isGameEnded: PropTypes.bool,
    isNewGameStarting: PropTypes.bool,
    newGameIsStarted: PropTypes.func,
}

export default GameField;