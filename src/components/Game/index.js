import React from 'react';
import Board from '../Board';

class Game extends React.Component{
  constructor(props){
super(props);
this.state={
xIsNext : true,
stepNumber: 0,
history: [
{squares: Array(9).fill(null)}
]
}
  }
render(){
const history = this.state.history;
const current= history[this.state.stepNumber]
  return(
<div className="game">
  <div className="board-game">
<Board onClick={(i)=>this.onClick(i)}
squares={current.squares}
/>
  </div>
</div>
  )
}
}

export default Game