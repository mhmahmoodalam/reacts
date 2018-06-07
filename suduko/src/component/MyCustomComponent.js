import React from 'react';
import '../css/board.css'
import { Sudoku } from './Sudoku';
export class MyCustomComponent extends React.Component{

   render(){
      return (
        <div className="solver">
          <header className="solver-header">
            <h1 className="solver-title">Sudoku Solver</h1>
          </header>
          <div className="solver-board-container">
            <div className="solver-board">
              <Sudoku title="Sudoku Board" type="input" />
            </div>
          </div>
        </div>
        );
   }
}
