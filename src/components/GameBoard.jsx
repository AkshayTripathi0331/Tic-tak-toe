import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// export default function GameBorad({onSelectSquare, activePlayerSymbol}) {

export default function GameBorad({onSelectSquare, turns}) {

  let gameBoard = initialGameBoard;
  
  for(const turn of turns){
    // gameBoard[turn.square.row][turn.square.col] = turn.player;
    const { square , player} =turn;
    const { row , col } = square;
    gameBoard[row][col] = player;
  }
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   function hanndleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colIndex] =activePlayerSymbol;
//       return updatedBoard;
//     });

//   onSelectSquare();
//   }



  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
              {/* <button onClick={() => hanndleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button> */}
               <button onClick={() =>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
