import React, { Component } from 'react';
import crossImg from './crossed-bones.png';
import zeroImg from './bat-mask.png';
import PropTypes from 'prop-types';
import './index.css';


class Square extends Component {
    render () {
        if (this.props.isCrossPutted) {
            return (
                <div className="game-square" onClick={this.props.handleClick}>
                    <img className="icon" src={crossImg} alt="sad"/>
                </div>
            );
        } else if (this.props.isZeroPutted) {
            return (
                <div className="game-square" alt="sad" onClick={this.props.handleClick}>
                    <img className="icon" src={zeroImg} alt="sad" />
                </div>
            );
        } else {
            return (
                <div className="game-square" onClick={this.props.handleClick}>

                </div>
            );
        }
    }
}

PropTypes.Square = {
    handleClick: PropTypes.func,
    isCrossPutted: PropTypes.bool,
    isZeroPutted: PropTypes.bool,
}

export default Square;