import React from 'react';
import crossImg from './crossed-bones.png';
import zeroImg from './bat-mask.png';
import PropTypes from 'prop-types';
import './index.css';


function Square(props) {
    return (
        <div className="game-square" onClick={props.handleClick}>
            {props.isCrossPutted ? <img className="icon" src={crossImg} alt="sad"/> : ''}
            {props.isZeroPutted ?  <img className="icon" src={zeroImg} alt="sad" /> : ''}
        </div>
    );
}

Square.propTypes = {
    handleClick: PropTypes.func,
    isCrossPutted: PropTypes.bool,
    isZeroPutted: PropTypes.bool,
}

export default Square;