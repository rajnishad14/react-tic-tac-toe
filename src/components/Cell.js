import React from 'react';
import "./cell.css";

const Cell = ({ index, value, move }) => {
    return (
        <button className="cell" onClick={e => {
            move(index)
            e.target.className = "clicked"
        }} >{value[index].box}</button>
    );
};

export default Cell;