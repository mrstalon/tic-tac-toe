const isZeroPutted = function(gameField, index) {
    return gameField[index].value === 'о' ? true : false;
}

export default isZeroPutted;