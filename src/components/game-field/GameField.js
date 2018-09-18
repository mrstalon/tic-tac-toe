import React, { Component } from 'react';
import './index.css';
import Square from '../game-square/Square.js';

class GameField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameSquares: [
                {
                    id: 0,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 1,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 2,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 3,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 4,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 5,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 6,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 7,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
                {
                    id: 8,
                    isCrossPutted: false,
                    isZeroPutted: false,
                },
            ],
        }
        this.putCrossOrZero = this.putCrossOrZero.bind(this);
    }
    putCrossOrZero(id) {
        console.log(id);
        if (this.props.crossTurn) {
            this.state.gameSquares[id].isCrossPutted = true;
            this.props.changeTurn(this.props.crossTurn, this.props.zeroTurn);
        } else if (this.props.zeroTurn) {
            this.state.gameSquares[id].isZeroPutted = true;
            this.props.changeTurn(this.props.crossTurn, this.props.zeroTurn);
        }
    }
    render() {
        return (
            <div className="game-field">
                <div className="field-row">
                    <Square onClick={this.putCrossOrZero(0)} isCrossPutted={this.state.gameSquares[0].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[0].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(1)} isCrossPutted={this.state.gameSquares[1].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[1].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(2)} isCrossPutted={this.state.gameSquares[2].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[2].isZeroPutted}/>
                </div>
                <div className="field-row">
                    <Square onClick={this.putCrossOrZero(3)} isCrossPutted={this.state.gameSquares[3].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[3].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(4)} isCrossPutted={this.state.gameSquares[4].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[4].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(5)} isCrossPutted={this.state.gameSquares[5].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[5].isZeroPutted}/>
                </div>
                <div className="field-row">
                    <Square onClick={this.putCrossOrZero(6)} isCrossPutted={this.state.gameSquares[6].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[6].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(7)} isCrossPutted={this.state.gameSquares[7].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[7].isZeroPutted}/>
                    <Square onClick={this.putCrossOrZero(8)} isCrossPutted={this.state.gameSquares[8].isCrossPutted}
                        isZeroPutted={this.state.gameSquares[8].isZeroPutted}/>
                </div>
            </div>
        )
    }
}

export default GameField;