let gameBoard = (function() {
    let board = [['x', 'o', 'o'],['o', 'x', 'o'],['o', 'x', 'x']];
    board.forEach(row => console.log(row));
})();

let gameControl = (function() {
    
})();

let Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
    
    return {getName, getMark};
};