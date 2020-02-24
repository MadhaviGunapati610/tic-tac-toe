import React from 'react';
import Board from '../Square';
import "../../styles.css";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      <Board />
    </button>
  )
}

export default Square;