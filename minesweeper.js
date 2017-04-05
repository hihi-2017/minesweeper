document.addEventListener('DOMContentLoaded', startGame)

//Define your `board` object here!

var board = {
  cells:[]
}


var size =6


function createBoard() {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      board.cells.push({
        row: i,
        col: j,
        isMine: Math.random() < 0.2 ? true : false,
        hidden: true })
    }
  }
}


function startGame () {
  // Don't remove this function call: it makes the game work!
  createBoard();

  for (var i = 0; i < board.cells.length; i++) {
     board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
   }
  lib.initBoard()
}

document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i<board.cells.length; i++) {
     if(board.cells[i].isMine &&  board.cells[i].isMarked === true) {
      return

    }

     if(board.cells[i].hidden === true && board.cells[i].isMine === false) {
      return
    }

  }

console.log("check for win");
lib.displayMessage('You win!')



  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count=0;
  for (var i = 0; i < surrounding.length; i++) {
  if(surrounding[i].isMine===true) {
  count +=1;
    }


  }
 return count;
}
