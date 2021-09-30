let gameBoard = (function() {
    //let board = ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'x', 'x'];
    let htmlBoard = document.querySelectorAll('.column');
    return {htmlBoard};
})();

let Player = (name, mark, turn) => {
    function makeMove(cell) {
        if (cell.textContent == '') {
            cell.textContent = mark
            endTurn();
        }
    }

    function endTurn() {
        gameControl.playerOne.turn = !gameControl.playerOne.turn;
        gameControl.playerTwo.turn = !gameControl.playerTwo.turn;
    }
    
    return {
        name: name,
        mark: mark,
        turn: turn,
        makeMove
    };
};

let gameControl = (function() {
    const playerOne = Player('Jason', 'X', true);
    const playerTwo = Player('Computer', 'O', false);
    
    function _getCurrentPlayer() {
        return playerOne.turn ? playerOne : playerTwo;
    };

    gameBoard.htmlBoard.forEach(cell => {
        cell.addEventListener('click', () => {
            _getCurrentPlayer().makeMove(cell);
        });
    });

    return {playerOne, playerTwo};
})();