import React, { useState } from "react";
import Cell from "./Cell";
import "./board.css";

const Board = () => {
  const [turn, setTurn] = useState("X");
  const [game, setGame] = useState(true);
  const [turnCounter, setTurnCounter] = useState(1);
  const [value, setValue] = useState([
    { box: null },
    { box: null },
    { box: null },
    { box: null },
    { box: null },
    { box: null },
    { box: null },
    { box: null },
    { box: null },
  ]);

  const move = (index) => {
    let valuecopy = value;
    if (valuecopy[index].box === null && game) {
      valuecopy[index].box = turn;
      setValue(valuecopy);

      let turnchange = "X";
      if (turn === "X") {
        turnchange = "O";
      }
      setTurn(turnchange);
      let count = turnCounter + 1;
      setTurnCounter(count);

      if (checkWinOrDraw()) {
        alert(`${turn} won 🎉🎉🎉`);
        setGame(false);
      } else if (count === 9) {
        alert(`game is draw!`);
        setGame(false);
      }
    }
  };

  const checkWinOrDraw = () => {
    let win = false;
    if (
      value[0].box === value[1].box &&
      value[2].box === value[1].box &&
      value[0].box != null &&
      value[1].box != null &&
      value[2].box != null
    ) {
      win = true;
    }
    if (
      value[3].box === value[4].box &&
      value[4].box === value[5].box &&
      value[3].box != null &&
      value[4].box != null &&
      value[5].box != null
    ) {
      win = true;
    }
    if (
      value[6].box === value[7].box &&
      value[7].box === value[8].box &&
      value[6].box != null &&
      value[7].box != null &&
      value[8].box != null
    ) {
      win = true;
    }
    if (
      value[0].box === value[3].box &&
      value[3].box === value[6].box &&
      value[0].box != null &&
      value[3].box != null &&
      value[6].box != null
    ) {
      win = true;
    }
    if (
      value[4].box === value[1].box &&
      value[4].box === value[7].box &&
      value[4].box != null &&
      value[1].box != null &&
      value[7].box != null
    ) {
      win = true;
    }
    if (
      value[8].box === value[5].box &&
      value[2].box === value[5].box &&
      value[5].box != null &&
      value[8].box != null &&
      value[2].box != null
    ) {
      win = true;
    }
    if (
      value[0].box === value[4].box &&
      value[4].box === value[8].box &&
      value[0].box != null &&
      value[4].box != null &&
      value[8].box != null
    ) {
      win = true;
    }
    if (
      value[6].box === value[4].box &&
      value[2].box === value[4].box &&
      value[4].box != null &&
      value[6].box != null &&
      value[2].box != null
    ) {
      win = true;
    }
    return win;
  };
  return (
    <div>
      <div className="board">
        {value.map((val, key) => {
          return <Cell move={move} value={value} key={key} index={key} />;
        })}
      </div>
      <div>
        <h3>{turn}'s turn</h3>
      </div>
    </div>
  );
};

export default Board;
