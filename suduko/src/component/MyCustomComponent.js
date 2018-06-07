import React from 'react';
import '../css/board.css'
import { Suduko } from './Suduko';
export class MyCustomComponent extends React.Component{

   render(){
      return (
        <div className="solver">
          <header className="solver-header">
            <h1 className="solver-title">Suduko Solver</h1>
          </header>
          <div className="solver-board-container">
            <div className="solver-board">
              <Suduko title="Suduko Board" type="input" />
            </div>
          </div>
        </div>
        );
   }
}
