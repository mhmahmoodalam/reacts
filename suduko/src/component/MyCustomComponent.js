import React from 'react';
import '../css/board.css';
import '../css/Suduko.css';
import { Suduko } from './Suduko';
import { Provider } from 'react-redux'
import store from '../store/SudukoInputStore';
import { solvePuzzle, clearPuzzles , newGame} from '../actions/SudukoPlayerActions';
import loader from '../img/solving.gif';

export class MyCustomComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = { isLoading : false}
    this.handleLoading=this.handleLoading.bind(this);
  }
  handleLoading(){
    console.log("it is called");
    this.setState({ isLoading : true })
    store.dispatch(solvePuzzle());
    setTimeout(function() { //Start the timer
      this.setState({ isLoading : false }) //After 5 second, set render to true
  }.bind(this), 1000)

  }
   render(){
      return (
        <Provider store={store}>
          <div className="solver">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <h1 className="solver-title">React Suduko Solver</h1>
            </nav>
            <div  style={{display: this.state.isLoading === true ? 'block' : 'none'}} >
              <img src ={loader} / >
            </div>
            <div className="solver-board-container">
              <div className="solver-board">
                <Suduko title="Puzzle" type="input"  />
              </div>
              <div className="solver-buttons">
                <div className="solver-button">
                  <button id="solve" className =" btn btn-primary" onClick={this.handleLoading}>
                    Solve
                  </button>
                </div>
                <div className="solver-button">
                  <button id="clear"  className =" btn btn-danger" onClick={() => store.dispatch(clearPuzzles())}>
                    Clear
                  </button>
                </div>
                <div className="solver-button">
                  <button id="newgame" className =" btn btn-success" onClick={() => store.dispatch(newGame())}>
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
