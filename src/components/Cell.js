import React from 'react';
import "./cell.css";

const Cell = ({index,value,move}) => {
    return (
        <button className="cell" onClick={e=>move(index)} >{value[index].box}</button>
    );
};

export default Cell;