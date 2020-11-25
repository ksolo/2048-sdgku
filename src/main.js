import compare from "./compare"

let board = [
  [0,0,2,0],
  [0,2,4,0],
  [0,0,0,0],
  [2,2,4,4]
]

function pushLeft(board) {
  return board.map(row => compare(row.reverse()).reverse());
}

function pushRight(board) {
  return board.map(row => compare(row))
}

function pushUp(board) {
  board = transpose(board);
  board = transpose(pushLeft(board).reverse());
  return board;
}

function pushDown(board) {

}

function transpose(board) {
  const columns = [];
  for (let i=0; i < 4; i++) {
    columns.push(column(board, i))
  }
  return column;
}

function column(board, index) {
  result = [];
  board.forEach(row => result.push(row[index]))
  return result;
}

console.log(board);
board = pushLeft(board);
console.log(board);
board = pushRight(board);
console.log(board)
