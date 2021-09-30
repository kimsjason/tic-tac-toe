let gameBoard = (function() {
    //let board = ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'x', 'x'];
    let htmlBoard = document.querySelectorAll('.column');
    return {htmlBoard};
})();

let Player = (name, mark, turn) => {
    function makeMove(cell) {
        cell.textContent = mark
    }

    return {
        name: name,
        mark: mark,
        turn: turn,
        makeMove};
};

let gameControl = (function() {
    const playerOne = Player('Jason', 'X', true);
    const playerTwo = Player('Computer', 'O', false);
    
    function _getCurrentPlayer() {
        return playerOne.turn ? playerOne : playerTwo;
    };

    function _endTurn() {
        playerOne.turn = !playerOne.turn;
        playerTwo.turn = !playerTwo.turn;
    }

    gameBoard.htmlBoard.forEach(cell => {
        cell.addEventListener('click', () => {
            _getCurrentPlayer().makeMove(cell);
            _endTurn();
        });
    });
})();