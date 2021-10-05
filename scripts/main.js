let gameBoard = (function() {
    let htmlBoard = document.querySelectorAll('.column');
    
    return {htmlBoard};
})();

let Player = (name, mark, turn) => {
    let moves = [];

    function makeMove(cell) {
        if (cell.textContent == '') {
            cell.textContent = mark;
            moves.push([cell.parentElement.className, cell.className]);
        }
    }

    return {
        name: name,
        mark: mark,
        turn: turn,
        moves: moves,
        makeMove
    };
};

let gameControl = (function() {
    let playerOne = Player('Jason', 'X', true);
    let playerTwo = Player('Computer', 'O', false);

    function _getCurrentPlayer() {
        return playerOne.turn ? playerOne : playerTwo;
    }

    function _endTurn() {
        playerOne.turn = !playerOne.turn;
        playerTwo.turn = !playerTwo.turn;
    }
    
    function _checkWinner(player) {
        const reducer = function(uniqueMoves, move) {
            // Counts unique rows
            if (move[0] in uniqueMoves) {
                uniqueMoves[move[0]]++
            } else {
                uniqueMoves[move[0]] = 1;
            }
            // Counts unique columns
            if (move[1] in uniqueMoves) {
                uniqueMoves[move[1]]++
            } else {
                uniqueMoves[move[1]] = 1;
            }
            return uniqueMoves;
        }

        const uniqueMoves = player.moves.reduce(reducer, {});
        for (moveType in uniqueMoves) {
            // Checks 3 in a row for rows & columns
            if (uniqueMoves[moveType] == 3) {
                console.log('winner winner, chicken dinner!!');
                _endGame();
            } 
            // Checks 3 in a row for diagonals - there has to be one count for every row & column
            else if (Object.keys(uniqueMoves).length == 6) {
                console.log('winner winner chicken dinner');
                _endGame();
            }
        }
    }
    
    function _processEvents(cell) {
        return function() {
            _getCurrentPlayer().makeMove(cell);
            _checkWinner(_getCurrentPlayer());
            _endTurn();
        }
    }
    
    function _endGame() {
        let i = 0;
        gameBoard.htmlBoard.forEach(cell => {
            cell.removeEventListener('click', handlers[i]);
            i++;
        })
    }

    let index = 0;
    const handlers = []; // Need to store function reference in array to remove event listener
    gameBoard.htmlBoard.forEach(cell => {
        cell.addEventListener('click', handlers[index] = _processEvents(cell));
        index++;
    });

    return {playerOne, playerTwo};
})();