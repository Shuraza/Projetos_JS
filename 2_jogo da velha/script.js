const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
const message = document.getElementById('message');
let currentPlayer = 'x'
let board = ['','','','','','','','',''];

function checkWinner (){
    const winnigCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combination  of winnigCombinations){
        const [a,b,c] = combination;
        if(board[a] && board[a] === board[b] && board[a] === board [c]){
            return board[a];
        }
    }
    return board.includes('')? null : 'Empate';
}

function handleClick(event){
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if(board[index]|| checkWinner()){
        return;
    }

    board[index]= currentPlayer;
    cell.textContent = currentPlayer;

    const winner = checkWinner();

    if(winner){
        setTimeout(() => alert(winner === 'Empate'? 'O jogo Empatou!' : `O jogador ${winner} venceu!`), 100);
    }

    currentPlayer = currentPlayer ==='x'? 'O' : 'x' ;
}

function resetGame(){
    board = ['','','','','','','','',''];
    currentPlayer = 'x';
    cells.forEach(cell =>  cell.textContent = '');
}

cells.forEach(cell=> cell.addEventListener('click', handleClick ));
restartButton.addEventListener('click', resetGame);

resetGame();S


















