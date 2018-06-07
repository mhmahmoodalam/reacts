import React, { Component } from 'react';
import Grid from './Grid';
import '../css/Sudoku.css';

/**
 * Represents a 9x9 sudoku board.
 */
export class Sudoku extends Component {
    render() {
        return (
            <div>
                <div className="sudoku-title">
                    {this.props.title}
                </div>
                <div className="sudoku">
                    <div className="sudoku-row">
                        <div className="sudoku-box">
                            <Grid x={0} y={0} type={this.props.type}/>
                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }
}
