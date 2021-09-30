let gameBoard = (function() {
    let board = ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'x', 'x'];
    let htmlBoard = document.querySelectorAll('.column');

    return {htmlBoard};
})();

let gameControl = (function() {

})();

let Player = (name, mark, turn) => {
    const getName = () => name;
    const getMark = () => mark;
    const isTurn = () => turn;
    const _makeMove = (cell) => {
        return function() {cell.textContent = mark};
    }

    let i = 0;
    gameBoard.htmlBoard.forEach(cell => {
        cell.addEventListener('click', _makeMove(cell));
    });

    return {getName, getMark, isTurn};
};

const jason = Player('Jason', 'X', true);