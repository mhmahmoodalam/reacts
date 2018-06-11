import React from 'react';
import '../css/board.css';
import '../css/Suduko.css';
import { Suduko } from './Suduko';
import { Provider } from 'react-redux'
import store from '../store/SudukoInputStore';
import { solvePuzzle, clearPuzzles , newGame} from '../actions/SudukoPlayerActions';

export class MyCustomComponent extends React.Component{

   render(){
      return (
        <Provider store={store}>
          <div className="solver">
            <header className="solver-header">
              <h1 className="solver-title">React Suduko Solver</h1>
            </header>
            <div className="solver-board-container">
              <div className="solver-board">
                <Suduko title="Puzzle" type="input" />
              </div>
              <div className="solver-buttons">
                <div className="solver-button">
                  <button id="solve" onClick={() => store.dispatch(solvePuzzle())}>
                    Solve
                  </button>
                </div>
                <div className="solver-button">
                  <button id="clear" onClick={() => store.dispatch(clearPuzzles())}>
                    Clear
                  </button>
                </div>
                <div className="solver-button">
                  <button id="newgame" onClick={() => store.dispatch(newGame())}>
                    New Game
                  </button>
                </div>
              </div>
              <div className="solver-board">
                <Suduko title="Solution" type="output" />
              </div>
            </div>
          </div>
        </Provider>
        );
   }
}
