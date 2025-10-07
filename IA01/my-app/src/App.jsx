import { useState } from "react";

function Square({ value, onSquareClick, isHighlighted }) {
  return (
    <button
      className={"square" + (isHighlighted ? " highlight" : "")}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const result = calculateWinner(squares);
    if (result?.winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  const winningLine = result?.line || null;

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }).map((_, row) => (
        <div className="board-row" key={row}>
          {Array.from({ length: 3 }).map((_, col) => {
            const idx = row * 3 + col;
            const highlight = !!(
              (winningLine && winningLine.includes(idx)) ||
              status === "Draw"
            );
            return (
              <Square
                key={idx}
                value={squares[idx]}
                onSquareClick={() => handleClick(idx)}
                isHighlighted={highlight}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default function Game() {
  // history now stores objects: { squares, location }
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const currentSquares = history[currentMove].squares;

  const handlePlay = (nextSquares, moveIndex) => {
    const location = `(${Math.floor(moveIndex / 3) + 1}, ${
      (moveIndex % 3) + 1
    })`; // 1-based
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext((prev) => !prev);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  let moves = history.map((step, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move + " " + (step.location || "");
    } else {
      description = "Go to game start";
    }

    if (move === currentMove) {
      return (
        <li key={move}>
          <span>You are at move #{move}</span>
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  if (!isAscending) {
    moves = moves.slice().reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending((s) => !s)}>
          {isAscending ? "Sort: Ascending" : "Sort: Descending"}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}
