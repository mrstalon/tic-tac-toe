import React, { Component } from 'react';
import crossImg from './crossed-bones.png';
import zeroImg from './bat-mask.png';
import './index.css';


class Square extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        if (this.props.isCrossPlaced) {
            return (
                <div className="game-square">
                    <img className="icon" src={crossImg} alt="sad"/>
                </div>
            );
        } else if (this.props.isZeroPlaced) {
            return (
                <div className="game-square" alt="sad">
                    <img className="icon" src={zeroImg} />
                </div>
            );
        }
        return (
            <div className="game-square">

            </div>
        );
    }
}

export default Square;