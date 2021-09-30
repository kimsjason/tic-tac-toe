let gameBoard = (function() {
    let board = ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'x', 'x'];
    let htmlBoard = document.querySelectorAll('.column');
    let i = 0;
    htmlBoard.forEach(cell => {
        cell.textContent = board[i]
        i++;
    })
})();

let gameControl = (function() {

})();

let Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
    
    return {getName, getMark};
};

