const isCrossPutted = function(gameField, index) {
    return gameField[index].value === 'x' ? true : false;
}

export default isCrossPutted;